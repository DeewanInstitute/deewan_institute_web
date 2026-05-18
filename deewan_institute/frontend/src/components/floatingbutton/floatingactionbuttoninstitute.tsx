import { useState } from "react";
import styles from "./FloatingActionButtonInstitute.module.scss";


const FloatingActionButtonInstitute = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="https://www.deewantourism.com"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.fab}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Visit Deewan Tourism"
    >
      <span className={styles.iconWrap}>
        <img
        src="assets/images/logos/tourism-logo.svg"
        alt="Deewan Tourism Logo"
        className={styles.icon}
      />
      </span>

      <span className={`${styles.label} ${hovered ? styles.labelVisible : ""}`}>
        Deewan Tourism
      </span>
    </a>
  );
};

export default FloatingActionButtonInstitute;