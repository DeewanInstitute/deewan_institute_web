import { useEffect, useState } from "react";
import styles from "./SafetyModal.module.scss";

export default function SafetyModal() {
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
            <p className={styles.eyebrow}>Safety Notice</p>
            <h2 id="safety-modal-title" className={styles.title}>Travel &amp; Study in Jordan</h2>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.rule} />
          <p>Jordan remains an exceptionally safe, peaceful, and stable country.</p>
          <p>While regional events make global news headlines, Jordan maintains strict domestic tranquility and secure borders. Daily life across the country is completely unaffected by neighbouring conflicts.</p>
          <p>Our universities, historic sites, and cities operate normally with robust security. International students continue to live and study here comfortably every day. You will experience a welcoming, safe, and undisturbed environment throughout your educational journey.</p>
        </div>
        <div className={styles.footer}>
          <span className={styles.wordmark}>Deewan Institute for Languages &amp; Culture Studies.</span>
          <button className={styles.btn} onClick={dismiss}>I understand</button>
        </div>
      </div>
    </div>
  );
}