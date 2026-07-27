import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import ar from "./locales/ar.json";
import de from "./locales/de.json";
// import fr from "./locales/fr.json"; 

export const LANGUAGES = [
  { code: "en", label: "English", dir: "ltr" },
  { code: "de", label: "Deutsch", dir: "ltr" },
  // { code: "fr", label: "Français", dir: "ltr" },
] as const;

export type LanguageCode = (typeof LANGUAGES)[number]["code"];

const storedLanguage = localStorage.getItem("language");
const savedLanguage: LanguageCode =
  LANGUAGES.some(({ code }) => code === storedLanguage)
    ? (storedLanguage as LanguageCode)
    : "en";
const savedDir = LANGUAGES.find((l) => l.code === savedLanguage)?.dir || "ltr";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
    de: { translation: de },
    // fr: { translation: fr },
  },
  lng: savedLanguage,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

document.documentElement.lang = savedLanguage;
document.documentElement.dir = savedDir;

export default i18n;
