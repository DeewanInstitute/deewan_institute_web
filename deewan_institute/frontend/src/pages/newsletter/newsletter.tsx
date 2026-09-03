import { useRef, useState } from "react";
import Banner from "../../components/banner/banner";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import styles from "./newsletter.module.scss";
import { EDITIONS } from "../../../data/newsletter.data";
import FloatingActionButtonInstitute from "../../components/floatingbutton/floatingactionbuttoninstitute";
import { useTranslation } from "react-i18next";

function CanvaEmbed({
  src,
  title,
  aspectRatio,
  maxWidth,
}: {
  src: string;
  title: string;
  aspectRatio: number;
  maxWidth?: string;
}) {
  return (
    <div style={{ maxWidth: maxWidth ?? "100%", width: "100%" }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: 0,
          paddingTop: `${aspectRatio}%`,
          paddingBottom: 0,
          boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
          marginTop: "1.6em",
          marginBottom: "0.9em",
          overflow: "hidden",
          borderRadius: "8px",
          willChange: "transform",
        }}
      >
        <iframe
          loading="lazy"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            border: "none",
            padding: 0,
            margin: 0,
          }}
          src={src}
          allowFullScreen
          allow="fullscreen"
          title={title}
        />
      </div>
    </div>
  );
}

const EDITION_I18N: Record<string, { label: string; title: string; description: string; tag: string }> = {
  August: {
    label: "data.newsletter.data.label_august_2026",
    title: "data.newsletter.data.title_august_deewan_newsletter",
    description: "data.newsletter.data.description_dive_into_arabic_language_milestones_cultur",
    tag: "data.newsletter.data.tag_latest_issue",
  },
  july: {
    label: "data.newsletter.data.label_july_2026",
    title: "data.newsletter.data.title_july_deewan_newsletter",
    description: "data.newsletter.data.description_dive_into_arabic_language_milestones_cultur",
    tag: "data.newsletter.data.tag_previous_issue",
  },
  June: {
    label: "data.newsletter.data.label_june_2026",
    title: "data.newsletter.data.title_june_deewan_newsletter",
    description: "data.newsletter.data.description_dive_into_arabic_language_milestones_cultur",
    tag: "data.newsletter.data.tag_previous_issue",
  },
  may: {
    label: "data.newsletter.data.label_may_2026",
    title: "data.newsletter.data.title_may_deewan_newsletter",
    description: "data.newsletter.data.description_dive_into_arabic_language_milestones_cultur",
    tag: "data.newsletter.data.tag_previous_issue",
  },
  april: {
    label: "data.newsletter.data.label_april_2026",
    title: "data.newsletter.data.title_april_deewan_newsletter",
    description: "data.newsletter.data.description_a_visual_journey_through_deewan_s_april_pro",
    tag: "data.newsletter.data.tag_previous_issue",
  },
  March: {
    label: "data.newsletter.data.label_march_2026",
    title: "data.newsletter.data.title_march_deewan_newsletter",
    description: "data.newsletter.data.description_a_visual_journey_through_deewan_s_march_pro",
    tag: "data.newsletter.data.tag_previous_issue",
  },
  February: {
    label: "data.newsletter.data.label_february_2026",
    title: "data.newsletter.data.title_february_deewan_newsletter",
    description: "data.newsletter.data.description_a_visual_journey_through_deewan_s_february_",
    tag: "data.newsletter.data.tag_previous_issue",
  },
  January: {
    label: "data.newsletter.data.label_january_2026",
    title: "data.newsletter.data.title_january_deewan_newsletter",
    description: "data.newsletter.data.description_a_visual_journey_through_deewan_s_january_p",
    tag: "data.newsletter.data.tag_previous_issue",
  },
};

// ── Page ──────────────────────────────────────────────────────────────────────
export default function NewsletterPage() {
    const { t } = useTranslation();
  const [activeEdition, setActiveEdition] = useState(EDITIONS[0].id);
  const current = EDITIONS.find((e) => e.id === activeEdition)!;
  const editionRef = useRef<HTMLElement>(null);

  const editionLabel = (ed: (typeof EDITIONS)[number]) => {
    const keys = EDITION_I18N[ed.id];
    return keys ? t(keys.label) : ed.label;
  };
  const editionTitle = (ed: (typeof EDITIONS)[number]) => {
    const keys = EDITION_I18N[ed.id];
    return keys ? t(keys.title) : ed.title;
  };
  const editionDescription = (ed: (typeof EDITIONS)[number]) => {
    const keys = EDITION_I18N[ed.id];
    return keys ? t(keys.description) : ed.description;
  };

  const handlePick = (id: string) => {
    setActiveEdition(id);
    setTimeout(() => {
      editionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  };

  return (
    <div className={styles.page}>
      <NavBar />
      <FloatingActionButtonInstitute />

      <Banner
        data={{
          title: t("pages.newsletter.newsletter.title_newsletter"),
          description: t("pages.newsletter.newsletter.description_our_latest_news_insights_and_exclusive_cont"),
          backgroundImg: "../../assets/images/banner/news.webp",
        }}
      />


      {/* ── Featured embed ── */}
      <section className={styles.editionSection} ref={editionRef}>
        {/* Left: meta */}
        <div className={styles.editionMeta}>
          <span className={styles.editionIssueLabel}>{editionLabel(current)}</span>
          <h2 className={styles.editionTitle}>{editionTitle(current)}</h2>
          <p className={styles.editionDesc}>{editionDescription(current)}</p>
        </div>

        {/* Right: embed */}
        <div className={styles.editionEmbedCol}>
          <CanvaEmbed
            src={current.src}
            title={editionTitle(current)}
            aspectRatio={current.aspectRatio}
            maxWidth={current.format === "instagram" ? "480px" : "100%"}
          />
        </div>
      </section>

      {/* ── Archive ── */}
      <div className={styles.archiveDivider}>
        <span>{t("pages.newsletter.newsletter.text_all_issues")}</span>
      </div>

      <section className={styles.archiveGrid}>
        {EDITIONS.map((ed) => (
          <div
            key={ed.id}
            className={`${styles.archiveCard} ${activeEdition === ed.id ? styles.archiveCardActive : ""}`}
            role="button"
            tabIndex={0}
            onClick={() => handlePick(ed.id)}
            onKeyDown={(e) => e.key === "Enter" && handlePick(ed.id)}
          >
            {/* Canva preview thumbnail — click-blocker overlay on top */}
            <div className={styles.archiveThumb}>
              <CanvaEmbed
                src={ed.src}
                title={editionTitle(ed)}
                aspectRatio={ed.format === "instagram" ? 80 : 56.25}
              />
              {/* Transparent click-blocker so the card click works, not the iframe */}
              <div className={styles.archiveClickBlocker} />
              <div className={styles.archiveOverlay}>
                <span>{activeEdition === ed.id ? t("pages.newsletter.newsletter.text_currently_viewing") : t("pages.newsletter.newsletter.text_view_issue")}</span>
              </div>
            </div>
            <div className={styles.archiveBody}>
              <span className={styles.archiveDate}>{editionLabel(ed)}</span>
              <p className={styles.archiveTitle}>{editionTitle(ed)}</p>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
}
//done
