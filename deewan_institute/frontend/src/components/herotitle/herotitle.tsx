import styles from "./herotitle.module.scss";
import type { CSSProperties } from "react";

type HeroTitleProps = {
  subtitle: string;
  title: string;
  className?: string;
  color?: string;
  style?: CSSProperties;
};

type HeroTitleStyle = CSSProperties & {
  "--hero-color"?: string;
};

export default function HeroTitle({
  subtitle,
  title,
  className = "",
  color,
  style,
}: HeroTitleProps) {
  const heroStyle: HeroTitleStyle = {
    ...style,
    "--hero-color": color,
  };

  return (
    <section className={`${styles.hero} scroll-section ${className}`.trim()} style={heroStyle}>
      <p className={styles.subtitle}>{subtitle}</p>
      <h1>{title}</h1>
      <hr className={styles.divider} />
    </section>
  );
}