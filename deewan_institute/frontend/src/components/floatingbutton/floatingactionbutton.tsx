import { useState } from "react";
import styles from "./FloatingActionButton.module.scss";
import { useTranslation } from "react-i18next";

const FloatingActionButton = () => {
    const { t } = useTranslation();
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="mailto:arabic@deewaninstitute.com"
      className={styles.fab}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={t("components.floatingbutton.floatingactionbutton.aria_label_email_us_at_arabic_deewaninstitute_com")}
    >
      {/* <span className={`${styles.label} ${hovered ? styles.labelVisible : ""}`}>
        راسلنا
      </span> */}
      <span className={`${styles.label} ${hovered ? styles.labelVisible : ""}`}>
        {t("components.floatingbutton.floatingactionbutton.text_contact_us")}</span>

      <span className={styles.iconWrap}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <polyline points="2,4 12,13 22,4" />
        </svg>
      </span>
    </a>
  );
};

export default FloatingActionButton;