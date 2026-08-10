import styles from "./FloatingActionButtonInstitute.module.scss";
import { useTranslation } from "react-i18next";

const FloatingActionButtonInstitute = () => {
    const { t } = useTranslation();
  return (
    <a
      href="https://www.deewantourism.com"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.fab}
      aria-label={t("components.floatingbutton.floatingactionbuttoninstitute.aria_label_visit_deewan_tourism")}
    >
      <span className={styles.iconWrap}>
        <img
          src="/assets/images/logos/tourism-logo.webp"
          alt="Deewan Tourism Logo"
          className={styles.icon}
        />
      </span>
      

      <span className={styles.label}>
        {t("components.floatingbutton.floatingactionbuttoninstitute.text_deewan_cultural_experiences")}</span>
    </a>
  );
};

export default FloatingActionButtonInstitute;