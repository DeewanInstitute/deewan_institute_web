import styles from "./FloatingActionButtonInstitute.module.scss";

const FloatingActionButtonInstitute = () => {
  return (
    <a
      href="https://www.deewantourism.com"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.fab}
      aria-label="Visit Deewan Tourism"
    >
      <span className={styles.iconWrap}>
        <img
          src="/assets/images/logos/tourism-logo.svg"
          alt="Deewan Tourism Logo"
          className={styles.icon}
        />
      </span>
      

      <span className={styles.label}>
        Deewan Cultural Experiences
      </span>
    </a>
  );
};

export default FloatingActionButtonInstitute;