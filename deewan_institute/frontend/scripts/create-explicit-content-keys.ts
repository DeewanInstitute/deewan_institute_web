import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import english from "../data/english.ts";
import french from "../data/french.ts";
import german from "../data/german.ts";
import spanish from "../data/spanish.ts";
import arabicCourses from "../data/arabicCourses.ts";
import { modernHistory } from "../data/modernHistory.ts";
import { oldHistory } from "../data/oldHistory.ts";
import { palestineHistory } from "../data/palestineHistory.ts";
import { peopleHistory } from "../data/peopleHistory.ts";
import { mainBooks } from "../data/mainBooks.ts";
import { ammiyehCollection } from "../data/ammiyehCollection.ts";
import { fushaBook } from "../data/fushaBook.ts";
import { podcastSeasons } from "../data/podcastSeasons.ts";

const frontendRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const localeDir = path.join(frontendRoot, "src", "i18n", "locales");
const localeNames = ["en", "de"] as const;
const locales = Object.fromEntries(
  localeNames.map((language) => [
    language,
    JSON.parse(fs.readFileSync(path.join(localeDir, `${language}.json`), "utf8")),
  ]),
) as Record<(typeof localeNames)[number], Record<string, string>>;

const englishKeyByValue = new Map<string, string>();
for (const [key, value] of Object.entries(locales.en)) {
  if (!englishKeyByValue.has(value)) englishKeyByValue.set(value, key);
}

function add(key: string, value?: string) {
  if (!value) return;
  if (locales.en[key] && locales.de[key]) return;
  const oldKey = englishKeyByValue.get(value);
  locales.en[key] = value;
  locales.de[key] = oldKey ? (locales.de[oldKey] ?? value) : value;
}

const foreignSets = { english, french, german, spanish };
for (const [language, data] of Object.entries(foreignSets)) {
  const root = `content.foreign.${language}`;
  add(`${root}.title`, data.title);
  add(`${root}.description`, data.description);
  add(`${root}.language`, data.language);
  add(`${root}.bottomBannerTitle`, data.bottomBannerTitle);
  add(`${root}.bottomBannerButtonTitle`, data.bottomBannerButtonTitle);
  data.course.forEach((course, index) => {
    add(`${root}.courses.${index}.name`, course.name);
    add(`${root}.courses.${index}.description`, course.description);
    add(`${root}.courses.${index}.boldDescription`, course.boldDescription);
  });
}

const historySets = {
  modern: modernHistory,
  ancient: oldHistory,
  palestine: palestineHistory,
  people: peopleHistory,
};
for (const [section, data] of Object.entries(historySets)) {
  const root = `content.history.${section}`;
  add(`${root}.subtitle`, data.subTitle);
  data.info.forEach((item) => {
    const itemRoot = `${root}.items.${item.id}`;
    add(`${itemRoot}.title`, item.title);
    add(`${itemRoot}.subtitle`, item.subtitle);
    add(`${itemRoot}.captionOne`, item.caption_one);
    add(`${itemRoot}.captionTwo`, item.caption_two);
    add(`${itemRoot}.label`, "label" in item ? item.label : undefined);
    add(`${itemRoot}.description`, item.description);
  });
}

const bookSets = {
  main: mainBooks,
  ammiyeh: ammiyehCollection,
  podcast: podcastSeasons,
  fusha: [fushaBook],
};
for (const [collection, items] of Object.entries(bookSets)) {
  for (const item of items) {
    const root = `content.books.${collection}.${item.id}`;
    add(`${root}.title`, item.title);
    add(`${root}.subtitle`, item.subtitle);
    add(`${root}.description`, "description" in item ? item.description : undefined);
    add(`${root}.hosted`, "hosted" in item ? item.hosted : undefined);
    if ("collectionLabel" in item) add(`${root}.collectionLabel`, item.collectionLabel);
    if ("reviews" in item && item.reviews) {
      item.reviews.forEach((review, index) => {
        add(`${root}.reviews.${index}.comment`, review.comment);
      });
    }
  }
}

arabicCourses.courses.forEach((course, index) => {
  const root = `content.arabicCourses.courses.${index}`;
  add(`${root}.arabicTitle`, course.arabicTitle);
  add(`${root}.title`, course.title);
  add(`${root}.description`, course.description);
  add(`${root}.buttonText`, course.buttonText);
  add(`${root}.learnMoreButton`, course.learnMoreButton);
  add(`${root}.listDescription`, course.listDescription);
  course.list?.forEach((item, itemIndex) => {
    add(`${root}.list.${itemIndex}`, item.type);
  });
});

for (const language of localeNames) {
  fs.writeFileSync(
    path.join(localeDir, `${language}.json`),
    `${JSON.stringify(locales[language], null, 2)}\n`,
    "utf8",
  );
}

console.log("Created stable content.* translation keys for English and German.");
