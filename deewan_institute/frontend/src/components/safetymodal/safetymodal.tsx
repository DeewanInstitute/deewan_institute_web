import { useEffect, useState } from "react";
import styles from "./SafetyModal.module.scss";
import { useTranslation } from "react-i18next";

export default function SafetyModal() {
    const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("safety_modal_dismissed");
    if (!dismissed) setVisible(true);
  }, []);

  const dismiss = () => {
    sessionStorage.setItem("safety_modal_dismissed", "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-labelledby="safety-modal-title">
      <div className={styles.modal}>
        <div className={styles.header}>
          <div className={styles.shieldIcon}>
            <img src="/assets/images/icons/shield.svg" alt="Safety Icon" className={styles.shieldIcon} />
          </div>
          <div>
            <p className={styles.eyebrow}>{t("components.safetymodal.safetymodal.text_safety_notice")}</p>
            <h2 id="safety-modal-title" className={styles.title}>Travel &amp; Study in Jordan</h2>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.rule} />
          <p>{t("components.safetymodal.safetymodal.text_jordan_remains_an_exceptionally_safe_peaceful_and_")}</p>
          <p>{t("components.safetymodal.safetymodal.text_while_regional_events_make_global_news_headlines_j")}</p>
          <p>{t("components.safetymodal.safetymodal.text_our_universities_historic_sites_and_cities_operate")}</p>
        </div>
        <div className={styles.footer}>
          <span className={styles.wordmark}>{t("components.safetymodal.safetymodal.text_deewan_institute_for_languages_andamp_culture_stud")}</span>
          <button className={styles.btn} onClick={dismiss}>{t("components.safetymodal.safetymodal.text_i_understand")}</button>
        </div>
      </div>
    </div>
  );
}