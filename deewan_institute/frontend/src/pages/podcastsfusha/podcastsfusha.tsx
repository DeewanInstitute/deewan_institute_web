import { Fragment } from "react";
import { useEffect } from "react";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import PodcastSeasonBlock from "../../components/podcastblocks/podcastseasonblock";
import styles from "./podcastsfusha.module.scss";
import { seasons } from "../../../data/podcastsfusha.data";
import FloatingActionButton from "../../components/floatingbutton/floatingactionbutton";
import FloatingActionButtonInstitute from "../../components/floatingbutton/floatingactionbuttoninstitute";
import { useTranslation } from "react-i18next";

function PodcastsFusha() {
    const { t } = useTranslation();
    useEffect(() => {
      document.title = "Podcasts Fusha";
    }, []);
  return (
    <Fragment>
      <NavBar />
        <FloatingActionButton />
        <FloatingActionButtonInstitute />

      {/*  Hero Banner  */}
      <section className={styles.heroBanner}>
        <div className={styles.heroContent}>
          <img
            src="/assets/images/podcast/podcast-fusha-logo.webp"
            alt={t("pages.podcasts.podcasts.alt_deewan_podcast")}
            className={styles.bannerLogo}
          />
          {/* <h2 className={styles.heroTitle}>ARABIC PODCAST</h2> */}
        </div>
        <img
          src="/assets/images/podcast/wave-left-fusha.webp"
          alt=""
          className={styles.waveLeft}
        />
        <img
          src="/assets/images/podcast/wave-right-fusha.webp"
          alt=""
          className={styles.waveRight}
        />
      </section>
      {/* Season Cards Row */}
      {/* <section className={styles.seasonCardsSection}>
        <div className="container-fluid">
          <div className="row justify-content-center g-4">
            {seasonCards.map((card) => (
              <div
                key={card.season}
                className="col-6 col-md-2 d-flex justify-content-center"
              >
                <a
                  href={`#season-${card.seasonNumber}`}
                  // className={styles.seasonCardLink}
                >
                  <div className={styles.seasonCard}>
                    <div className={styles.seasonCardImg}>
                      <img
                        src={card.image}
                        alt={t("pages.podcasts.podcasts.text_season_number", { number: card.season })}
                      />
                    </div>
                    <div className={styles.cardTextContent}>
                      <p className={styles.seasonCardLabel}>
                        {t("pages.podcasts.podcasts.text_season_number", { number: card.season })}
                      </p>
                      <p className={styles.seasonCardHost}>
                        {t("pages.podcasts.podcasts.text_hosted_by")}<br />
                        {t(card.hostKey)}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/*Main Content & Illustration*/}
      <section className={styles.mainContentSection}>
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side: Writing Space */}
            <div className="col-md-6">
              <div className={styles.textContent}>
                <h3 className={styles.contentSubtitle}>
                  {t("pages.podcasts.podcasts.text_deewan_arabic_podcasts")}</h3>
                <h1 className={styles.contentTitle}>
                  {t("pages.podcastsfusha.podcasts.text_build_your_fusha")}</h1>
                  <p>{t("pages.podcastsfusha.podcasts.text_learn_modern_standard_arabic")}</p>
                <p>
                  {t("pages.podcastsfusha.podcasts.text_designed_for_learners")}</p>
                <p>
                  {t("pages.podcastsfusha.podcasts.text_our_first_season")}</p>
                <p>
                  {t("pages.podcastsfusha.podcasts.text_listen_learn_practice")}</p>
              </div>
            </div>

            {/* Right Side: Illustration */}
            <div className="col-md-6">
              <div className={styles.illustrationWrapper}>
                <img
                  src="/assets/images/podcast/fusha-01.webp"
                  alt={t("pages.podcasts.podcasts.alt_podcast_illustration")}
                  className={styles.mainIllustration}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Season Blocks*/}
      <main className={styles.seasonsMain}>
        <div className="container">
          {seasons.map((s, i) => (
            <Fragment key={s.seasonNumber}>
              <div id={`season-${s.seasonNumber}`}>
                <PodcastSeasonBlock
                  seasonNumber={s.seasonNumber}
                  developedBy={s.developedByKey ? t(s.developedByKey) : undefined}
                  episodes={s.episodes.map((ep) => ({ id: ep.id, title: t(ep.titleKey), audioUrl: ep.audioUrl }))}
                  bookCoverImage={s.bookCover}
                  bookCoverAlt={t(s.bookAltKey)}
                  reverse={s.reverse}
                />
                {i < seasons.length - 1 && <hr className={styles.divider} />}
              </div>
            </Fragment>
          ))}
        </div>
      </main>

      <Footer />
    </Fragment>
  );
}

export default PodcastsFusha;
