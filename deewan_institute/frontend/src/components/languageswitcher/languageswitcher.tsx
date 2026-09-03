import { useId } from "react";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import { useTranslation } from "react-i18next";
import { LANGUAGES, type LanguageCode } from "../../i18n";
import styles from "./languageswitcher.module.scss";

interface LanguageSwitcherProps {
  appearance?: "light" | "dark";
  compact?: boolean;
}

export function LanguageSwitcher({
  appearance = "dark",
  compact = false,
}: LanguageSwitcherProps) {
  const { t, i18n } = useTranslation();
  const selectId = useId();
  const activeLanguage = (i18n.resolvedLanguage ?? i18n.language).split("-")[0];

  const changeLanguage = async (language: LanguageCode) => {
    const selectedLanguage = LANGUAGES.find((item) => item.code === language);
    if (!selectedLanguage) return;

    await i18n.changeLanguage(language);
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
    document.documentElement.dir = selectedLanguage.dir;
  };

  return (
    <div
      className={[
        styles.languageSwitcher,
        styles[appearance],
        compact ? styles.compact : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <HiOutlineGlobeAlt className={styles.icon} aria-hidden="true" />
      <label className={styles.srOnly} htmlFor={selectId}>
        {t("components.languageswitcher.languageswitcher.text_select_language")}</label>
      <select
        id={selectId}
        className={styles.select}
        value={activeLanguage}
        onChange={(event) =>
          void changeLanguage(event.target.value as LanguageCode)
        }
        aria-label={t("components.languageswitcher.languageswitcher.text_select_language")}
      >
        {LANGUAGES.map((language) => (
          <option key={language.code} value={language.code}>
            {compact ? language.code.toUpperCase() : language.label}
          </option>
        ))}
      </select>
    </div>
  );
}
