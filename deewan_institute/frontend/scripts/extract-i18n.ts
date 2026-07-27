import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "node:url";
import { globSync } from "glob";

const frontendRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceRoot = path.join(frontendRoot, "src");
const merge = process.argv.includes("--merge");
const outputFile = path.join(
  sourceRoot,
  "i18n",
  "locales",
  merge ? "en.json" : "en.generated.json",
);

const files = globSync(["src/**/*.{tsx,ts}", "data/**/*.ts"], {
  cwd: frontendRoot,
  absolute: true,
  ignore: [
    "src/**/*.test.*",
    "src/**/*.spec.*",
    "src/**/*.d.ts",
    "src/locales/**",
    "src/i18n/**"
  ]
});

const dictionary: Record<string, string> = merge && fs.existsSync(outputFile)
  ? JSON.parse(fs.readFileSync(outputFile, "utf8"))
  : {};
const existingValues = new Set(Object.values(dictionary));

function normalizeText(text: string) {
  return text.trim().replace(/\s+/g, " ");
}

function stripComments(content: string) {
  return content
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/^\s*\/\/.*$/gm, "");
}

function makeKey(file: string, text: string) {
  const relativeFile = path.relative(frontendRoot, file);
  const filePart = relativeFile
    .replace(/^src[\\/]/, "")
    .replace(/\.(tsx|ts)$/, "")
    .replace(/[\\/]/g, ".");

  const textPart = text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/—/g, " ")
    .replace(/–/g, " ")
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_|_$/g, "")
    .slice(0, 55);

  return `${filePart}.${textPart}`;
}

function addToDictionary(file: string, keyHint: string, text: string) {
  const normalized = normalizeText(text);

  if (shouldSkipText(normalized)) return;
  if (existingValues.has(normalized)) return;

  const baseKey = makeKey(file, `${keyHint} ${normalized}`);
  let key = baseKey;
  let counter = 2;

  while (dictionary[key] && dictionary[key] !== normalized) {
    key = `${baseKey}_${counter}`;
    counter += 1;
  }

  dictionary[key] = normalized;
  existingValues.add(normalized);
}

function shouldSkipField(fieldName: string) {
  const skippedFields = new Set([
    "id",
    "key",
    "index",
    "slug",
    "type",
    "variant",
    "color",
    "accentKey",
    "btnKey",
    "image",
    "img",
    "src",
    "href",
    "url",
    "path",
    "route",
    "link",
    "icon",
    "className"
  ]);

  return skippedFields.has(fieldName);
}

function shouldSkipText(text: string) {
  if (!text) return true;
  if (text.length < 2) return true;

  if (/^[\d\s.,:;!?()[\]{}'"-]+$/.test(text)) return true;
  if (/^https?:\/\//i.test(text)) return true;
  if (text.startsWith("/")) return true;
  if (/\.(png|jpe?g|webp|svg|gif|mp4|pdf)$/i.test(text)) return true;
  if (/^#[0-9a-f]{3,8}$/i.test(text)) return true;

  if (text.includes("${")) return true;
  if (text.includes("=>")) return true;
  if (text.includes("import ")) return true;
  if (text.includes("export ")) return true;

  return false;
}

for (const file of files) {
  const rawContent = fs.readFileSync(file, "utf8");
  const content = stripComments(rawContent);

  const jsxTextMatches = content.matchAll(/>\s*([^<>{}\n][^<>{}]*)\s*</g);

  for (const match of jsxTextMatches) {
    const text = match[1];

    addToDictionary(file, "text", text);
  }

  const propMatches = content.matchAll(
    /\b(alt|title|placeholder|aria-label|label)\s*=\s*["']([^"']+)["']/g
  );

  for (const match of propMatches) {
    const fieldName = match[1];
    const text = match[2];

    addToDictionary(file, fieldName, text);
  }

  const objectStringMatches = content.matchAll(
    /\b([A-Za-z_$][\w$]*)\s*:\s*(?:"((?:\\.|[^"\\])*)"|'((?:\\.|[^'\\])*)'|`((?:\\.|[^`\\])*)`)/g
  );

  for (const match of objectStringMatches) {
    const fieldName = match[1];
    const text = match[2] ?? match[3] ?? match[4] ?? "";

    if (shouldSkipField(fieldName)) continue;

    addToDictionary(file, fieldName, text);
  }
}

fs.mkdirSync(path.dirname(outputFile), { recursive: true });

fs.writeFileSync(outputFile, JSON.stringify(dictionary, null, 2), "utf8");

console.log(`Extracted ${Object.keys(dictionary).length} strings to ${outputFile}`);
