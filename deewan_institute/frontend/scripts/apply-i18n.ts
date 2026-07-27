import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import {
  Project,
  SourceFile,
  SyntaxKind,
  Node
} from "ts-morph";
import { globSync } from "glob";

const frontendRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const localeFile = path.join(frontendRoot, "src", "i18n", "locales", "en.json");
const dryRun = process.argv.includes("--dry-run");
const en = JSON.parse(fs.readFileSync(localeFile, "utf8")) as Record<string, string>;

const textToKey = new Map<string, string>();

for (const [key, value] of Object.entries(en)) {
  const normalized = normalizeText(value);

  if (!textToKey.has(normalized)) {
    textToKey.set(normalized, key);
  }
}

const project = new Project({
  tsConfigFilePath: path.join(frontendRoot, "tsconfig.app.json"),
  skipAddingFilesFromTsConfig: true
});

const files = globSync("src/**/*.{tsx,jsx}", {
  cwd: frontendRoot,
  absolute: true,
  ignore: ["src/i18n/**", "src/**/*.test.*", "src/**/*.spec.*"]
});

for (const file of files) {
  const sourceFile = project.addSourceFileAtPath(file);

  let changed = false;

  const jsxTexts = sourceFile.getDescendantsOfKind(SyntaxKind.JsxText);

  for (const node of jsxTexts) {
    const text = normalizeText(node.getText());

    if (!text) continue;

    const key = textToKey.get(text);

    if (!key) continue;

    node.replaceWithText(`{t("${key}")}`);
    changed = true;
  }

  const attributes = sourceFile.getDescendantsOfKind(SyntaxKind.JsxAttribute);

  for (const attribute of attributes) {
    const name = attribute.getNameNode().getText();

    if (!["alt", "title", "placeholder", "aria-label", "label"].includes(name)) {
      continue;
    }

    const initializer = attribute.getInitializer();

    if (!initializer) continue;
    if (initializer.getKind() !== SyntaxKind.StringLiteral) continue;

    const text = normalizeText(initializer.getText().slice(1, -1));
    const key = textToKey.get(text);

    if (!key) continue;

    attribute.setInitializer(`{t("${key}")}`);
    changed = true;
  }

  if (changed) {
    addUseTranslationImport(sourceFile);
    addUseTranslationHook(sourceFile);

    const relativeFile = path.relative(frontendRoot, file);
    if (dryRun) {
      console.log(`Would update ${relativeFile}`);
    } else {
      sourceFile.saveSync();
      console.log(`Updated ${relativeFile}`);
    }
  }
}

function normalizeText(text: string) {
  return text.trim().replace(/\s+/g, " ");
}

function addUseTranslationImport(sourceFile: SourceFile) {
  const alreadyImportsUseTranslation = sourceFile
    .getImportDeclarations()
    .some((importDeclaration) => {
      return (
        importDeclaration.getModuleSpecifierValue() === "react-i18next" &&
        importDeclaration
          .getNamedImports()
          .some((namedImport) => namedImport.getName() === "useTranslation")
      );
    });

  if (alreadyImportsUseTranslation) return;

  sourceFile.addImportDeclaration({
    moduleSpecifier: "react-i18next",
    namedImports: ["useTranslation"]
  });
}

function addUseTranslationHook(sourceFile: SourceFile) {
  for (const fn of sourceFile.getFunctions()) {
    const body = fn.getBody();

    if (!body) continue;
    if (!body.getText().includes("t(")) continue;
    if (body.getText().includes("useTranslation()")) continue;
    if (Node.isBlock(body)) {
      body.insertStatements(0, "const { t } = useTranslation();");
    }
  }

  for (const declaration of sourceFile.getVariableDeclarations()) {
    const initializer = declaration.getInitializer();

    if (!initializer) continue;

    if (Node.isArrowFunction(initializer) || Node.isFunctionExpression(initializer)) {
      const body = initializer.getBody();

      if (!body.getText().includes("t(")) continue;
      if (body.getText().includes("useTranslation()")) continue;

      if (Node.isBlock(body)) {
        body.insertStatements(0, "const { t } = useTranslation();");
      } else {
        console.warn(
          `Skipped hook insertion for implicit return component in ${sourceFile.getFilePath()}`
        );
      }
    }
  }
}
