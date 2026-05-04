import { useEffect, useRef, useState } from "react";
import Banner from "../../components/banner/banner";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import styles from "./newsletter.module.scss";
import { EDITIONS } from "../../../data/newsletter.data";



// ── Animated counter ──────────────────────────────────────────────────────────
// function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
//   const [value, setValue] = useState(0);
//   const ref = useRef<HTMLSpanElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (!entry.isIntersecting) return;
//         observer.disconnect();
//         let start = 0;
//         const step = Math.ceil(target / 60);
//         const timer = setInterval(() => {
//           start += step;
//           if (start >= target) { setValue(target); clearInterval(timer); }
//           else setValue(start);
//         }, 20);
//       },
//       { threshold: 0.5 }
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, [target]);

//   return <span ref={ref}>{value}{suffix}</span>;
// }

// ── Canva Embed — mirrors Canva's own recommended HTML exactly ───────────────
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

// ── Page ──────────────────────────────────────────────────────────────────────
export default function NewsletterPage() {
  const [activeEdition, setActiveEdition] = useState(EDITIONS[0].id);
  const current = EDITIONS.find((e) => e.id === activeEdition)!;
  const editionRef = useRef<HTMLElement>(null);

  const handlePick = (id: string) => {
    setActiveEdition(id);
    setTimeout(() => {
      editionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  };

  return (
    <div className={styles.page}>
      <NavBar />
      <Banner
        data={{
          title: "Newsletter",
          description: "Our latest news, insights, and exclusive content",
          backgroundImg: "../../assets/images/banner/news.JPG",
        }}
      />


      {/* ── Featured embed ── */}
      <section className={styles.editionSection} ref={editionRef}>
        {/* Left: meta */}
        <div className={styles.editionMeta}>
          <span className={styles.editionIssueLabel}>{current.label}</span>
          <h2 className={styles.editionTitle}>{current.title}</h2>
          <p className={styles.editionDesc}>{current.description}</p>
        </div>

        {/* Right: embed */}
        <div className={styles.editionEmbedCol}>
          <CanvaEmbed
            src={current.src}
            title={current.title}
            aspectRatio={current.aspectRatio}
            maxWidth={current.format === "instagram" ? "480px" : "100%"}
          />
        </div>
      </section>

      {/* ── Archive ── */}
      <div className={styles.archiveDivider}>
        <span>All Issues</span>
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
                title={ed.title}
                aspectRatio={ed.format === "instagram" ? 80 : 56.25}
              />
              {/* Transparent click-blocker so the card click works, not the iframe */}
              <div className={styles.archiveClickBlocker} />
              <div className={styles.archiveOverlay}>
                <span>{activeEdition === ed.id ? "Currently Viewing" : "View Issue"}</span>
              </div>
            </div>
            <div className={styles.archiveBody}>
              <span className={styles.archiveDate}>{ed.label}</span>
              <p className={styles.archiveTitle}>{ed.title}</p>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
}