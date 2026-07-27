import { useState, type JSX } from "react";
import styles from "./terms.module.scss";
import { useTranslation } from "react-i18next";

interface Term {
  heading: string;
  content: string;
}

interface TermsModalProps {
  onAccept: () => void;
  onDecline: () => void;
}

const defaultTerms: Term[] = [
  {
    heading: "1. Acceptance",
    content:
      "By using this service, you agree to be bound by these terms. If you do not agree, please decline.",
  },
  {
    heading: "2. Privacy",
    content:
      "We respect your privacy and will never share your data with third parties without your consent.",
  },
  {
    heading: "3. Usage",
    content:
      "You agree to use this service responsibly and in accordance with applicable laws and regulations.",
  },
];

function TermsModal({ onAccept, onDecline }: TermsModalProps): JSX.Element {
    const { t } = useTranslation();
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className={styles.overlay}>
      <div className={styles.card}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>{t("components.terms.terms.text_terms_and_conditions")}</h2>
          <p className={styles.description}>
            {t("components.terms.terms.text_please_read_carefully_before_proceeding")}</p>
        </div>

        {/* Terms Box */}
        <div className={styles.termsBox}>
          {defaultTerms.map((term: Term, index: number) => (
            <div key={index} className={styles.termItem}>
              <p className={styles.termHeading}>{term.heading}</p>
              <p className={styles.termContent}>{term.content}</p>
            </div>
          ))}
        </div>

        {/* Checkbox */}
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setIsChecked(e.target.checked)
            }
            className={styles.checkbox}
          />
          <span className={styles.checkboxText}>
            {t("components.terms.terms.text_i_have_read_and_understood_the_terms_and_condition")}</span>
        </label>

        {/* Helper Text */}
        {!isChecked && (
          <p className={styles.helperText}>
            ☝️ Check the box above to enable the Accept button
          </p>
        )}
        
        {/* Buttons */}
        <div className={styles.buttonGroup}>
          <button className={styles.btnDecline} onClick={onDecline}>
            {t("components.terms.terms.text_i_decline")}</button>
          <button
            className={styles.btnAccept}
            onClick={onAccept}
            disabled={!isChecked}
          >
            {t("components.terms.terms.text_i_accept")}</button>
        </div>
      </div>
    </div>
  );
}

export default TermsModal;
