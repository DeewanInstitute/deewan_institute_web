import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import styles from "./ecosystem.module.scss";

const BRANDS = [
  { id: "institute", h: 315, logo: "/assets/images/logos/institute.webp", url: "https://www.deewaninstitute.com" },
  { id: "tourism", h: 283, logo: "/assets/images/logos/tourism.webp", url: "https://www.deewantourism.com" },
  { id: "development", h: 340, logo: "/assets/images/logos/development.webp", url: "https://www.deewandevelopment.com" },
  { id: "bookshop", h: 369, logo: "/assets/images/logos/bookshop.webp", url: "https://www.deewanbookshop.com" },
];

function Ecosystem() {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = BRANDS.find((b) => b.id === activeId);
  const key = (id: string, field: string) => `pages.about.ecosystem.${id}_${field}`;

  useEffect(() => {
    if (!activeId) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActiveId(null);
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [activeId]);

  return (
    <section className={`${styles.ecosystem} scroll-section`}>
      <div className={`${styles.title} mx-auto`}>
        <span>{t("pages.about.ecosystem.title")}</span>
      </div>
      <p className={styles.intro}>{t("pages.about.ecosystem.intro")}</p>

      <div className={styles.grid}>
        {BRANDS.map((b) => (
          <div key={b.id} className={styles.card}>
            <div className={styles.logoBox}>
              <img src={b.logo} alt={t(key(b.id, "name"))} style={{ "--h": b.h } as React.CSSProperties} />
            </div>
            <button type="button" className={styles.moreBtn} onClick={() => setActiveId(b.id)}>
              {t("pages.about.ecosystem.more_info")}
              <span className={styles.arrow} aria-hidden />
            </button>
          </div>
        ))}
      </div>

      {active &&
        // Portal: .scroll-section is transformed, which would trap a position:fixed backdrop inside it
        createPortal(
        <div className={styles.backdrop} onMouseDown={() => setActiveId(null)}>
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="ecosystem-modal-title"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.close}
              aria-label={t("pages.about.ecosystem.close")}
              onClick={() => setActiveId(null)}
            >
              ×
            </button>
            <div className={styles.logoWrap}>
              <img src={active.logo} alt="" />
            </div>
            <span className={styles.tag}>{t(key(active.id, "subtitle"))}</span>
            <h3 id="ecosystem-modal-title">{t(key(active.id, "name"))}</h3>
            <hr />
            <p className={styles.description}>{t(key(active.id, "description"))}</p>
            <a href={active.url} target="_blank" rel="noopener noreferrer" className={styles.visit}>
              <strong>{t("pages.about.ecosystem.website")}</strong>
              <span dir="ltr">{active.url.replace("https://", "")}</span>
              <span className={styles.arrow} aria-hidden />
            </a>
          </div>
        </div>,
        document.body,
      )}
    </section>
  );
}

export default Ecosystem;
