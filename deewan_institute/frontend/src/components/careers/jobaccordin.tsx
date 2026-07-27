import "bootstrap";
import styles from "./jobaccordin.module.scss";
import { useState } from "react";
import { jobData } from "../../../data/jobData";
import { useTranslation } from "react-i18next";

function JobAccordin() {
    const { t } = useTranslation();
  const [openItem, setOpenItem] = useState<number | null>(null);

  const handleAccordionToggle = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center scroll-section slide-in-left">
      <div className={`w-100 ${styles.jobVacancies}`}>
        <h1 className={`text-center mb-4 ${styles.heading}`}>
          {t("components.navbar.navbar.title_join_our_team")}<br /> {t("components.careers.jobaccordin.text_at_deewan")}</h1>
        <p className={`mb-5 lead ${styles.intro}`}>
          {t("components.careers.jobaccordin.text_discover_exciting_opportunities_at_deewan_situated")}</p>

        <div className="accordion">
          {jobData.map((job) => (
            <div className="accordion-item" key={job.id}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${openItem === job.id ? "" : "collapsed"} ${styles.bold}`}
                  type="button"
                  onClick={() => handleAccordionToggle(job.id)}
                  aria-expanded={openItem === job.id}
                >
                  {job.title}
                </button>
              </h2>

              {openItem === job.id && (
                <div className="accordion-collapse collapse show">
                  <div className="accordion-body">
                    <div className={`${styles.description} mb-3`}>
                      <span className={styles.bold}>{t("components.careers.jobaccordin.text_job_description")}</span>
                      <p className={styles.textBlock}>{job.description}</p>
                    </div>

                    <div className={`${styles.requirements} mb-3`}>
                      <span className={styles.bold}>{t("components.careers.jobaccordin.text_requirements")}</span>
                      <p className={styles.textBlock}>{job.requirements}</p>
                    </div>

                    <div className={styles.details}>
                      <span className={styles.bold}>{t("pages.calculator.calculator.text_location")}</span> {job.location}
                      <br />
                      <span className={styles.bold}>{t("components.careers.jobaccordin.text_type")}</span> {job.type}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JobAccordin;