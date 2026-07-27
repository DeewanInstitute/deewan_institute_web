import * as fs from "node:fs/promises";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { config } from "dotenv";

const frontendRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
config({ path: path.join(frontendRoot, ".env") });

// ─── Supported languages ────────────────────────────────────────────────────
// To add a new language in the future, just add an entry here.
// Key   = the argument you pass on the CLI  (e.g. "DE", "FR")
// value = the DeepL target_lang code        (same in most cases)
const SUPPORTED_LANGUAGES: Record<string, string> = {
  AR: "AR",
  DE: "DE",
  FR: "FR",
};

// ─── Resolve target language from CLI arg ────────────────────────────────────
const cliArg = process.argv[2]?.toUpperCase();

if (!cliArg || !SUPPORTED_LANGUAGES[cliArg]) {
  const supported = Object.keys(SUPPORTED_LANGUAGES).join(", ");
  throw new Error(
    `Usage: node scripts/translate.ts <LANG>\n` +
      `Supported languages: ${supported}\n` +
      `Example: npm run translate:de`
  );
}

const deeplTargetLang = SUPPORTED_LANGUAGES[cliArg];
const outputFileName = cliArg.toLowerCase(); // "de", "ar", "fr"

// ─── File paths ───────────────────────────────────────────────────────────────
const inputFile = path.join(frontendRoot, "src", "i18n", "locales", "en.json");
const outputFile = path.join(frontendRoot, "src", "i18n", "locales", `${outputFileName}.json`);

// ─── DeepL config ─────────────────────────────────────────────────────────────
const deeplApiKey = process.env.DEEPL_API_KEY;
const deeplApiUrl =
  process.env.DEEPL_API_URL || "https://api-free.deepl.com/v2/translate";

if (!deeplApiKey) {
  throw new Error("Missing DEEPL_API_KEY in your .env file.");
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

interface DeepLResponse {
  translations: { text: string }[];
}

async function translateBatch(texts: string[]): Promise<string[]> {
  const response = await fetch(deeplApiUrl, {
    method: "POST",
    headers: {
      Authorization: `DeepL-Auth-Key ${deeplApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: texts,
      source_lang: "EN",
      target_lang: deeplTargetLang,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`DeepL API error (${response.status}): ${errorText}`);
  }

  const data = (await response.json()) as DeepLResponse;
  return data.translations.map((item) => item.text);
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log(`\n🌍 Translating EN → ${cliArg} (DeepL code: ${deeplTargetLang})`);
  console.log(`   Input : ${inputFile}`);
  console.log(`   Output: ${outputFile}\n`);

  const enRaw = await fs.readFile(inputFile, "utf8");
  const en = JSON.parse(enRaw) as Record<string, string>;

  // Load existing translations so we only translate NEW or MISSING keys.
  let existing: Record<string, string> = {};
  if (await fileExists(outputFile)) {
    const raw = await fs.readFile(outputFile, "utf8");
    existing = JSON.parse(raw) as Record<string, string>;
    console.log(`✅ Found existing ${outputFileName}.json — skipping already-translated keys.`);
  }

  // Only translate keys that are missing or empty in the existing file.
  const toTranslate = Object.entries(en).filter(([key, value]) => {
    return value?.trim() && !existing[key];
  });

  if (toTranslate.length === 0) {
    console.log(`✨ Nothing new to translate — ${outputFileName}.json is already up to date.`);
    return;
  }

  console.log(`📝 Total keys in en.json   : ${Object.keys(en).length}`);
  console.log(`🔁 Already translated      : ${Object.keys(existing).length}`);
  console.log(`🆕 Keys to translate now   : ${toTranslate.length}\n`);

  const translated: Record<string, string> = { ...existing };

  // DeepL recommends batches of up to 50 strings per request.
  const BATCH_SIZE = 50;

  for (let i = 0; i < toTranslate.length; i += BATCH_SIZE) {
    const batch = toTranslate.slice(i, i + BATCH_SIZE);
    const batchKeys = batch.map(([key]) => key);
    const batchValues = batch.map(([, value]) => value);

    const from = i + 1;
    const to = Math.min(i + BATCH_SIZE, toTranslate.length);
    console.log(`  Translating keys ${from}–${to} of ${toTranslate.length}...`);

    const results = await translateBatch(batchValues);

    results.forEach((text, idx) => {
      translated[batchKeys[idx]] = text;
    });
  }

  // Write output in the same key order as en.json for easy diffing.
  const sorted = Object.keys(en).reduce<Record<string, string>>((acc, key) => {
    if (translated[key]) acc[key] = translated[key];
    return acc;
  }, {});

  await fs.mkdir(path.dirname(outputFile), { recursive: true });
  await fs.writeFile(outputFile, JSON.stringify(sorted, null, 2), "utf8");

  console.log(`\n✅ Done! ${outputFileName}.json saved to ${outputFile}`);
}

main().catch((err) => {
  console.error("\n❌ Translation failed:", err.message);
  process.exit(1);
});
