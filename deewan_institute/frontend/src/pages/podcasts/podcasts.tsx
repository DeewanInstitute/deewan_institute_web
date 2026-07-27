import { Fragment } from "react";
import { useEffect } from "react";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import PodcastSeasonBlock from "../../components/podcastblocks/podcastseasonblock";
import styles from "./podcasts.module.scss";
import { seasons, seasonCards } from "../../../data/podcasts.data";
import FloatingActionButton from "../../components/floatingbutton/floatingactionbutton";
import FloatingActionButtonInstitute from "../../components/floatingbutton/floatingactionbuttoninstitute";
import { useTranslation } from "react-i18next";

function Podcasts() {
    const { t } = useTranslation();
    useEffect(() => {
      document.title = "Podcasts";
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
            src="/assets/images/podcast/podcast-logo.png"
            alt="Deewan Podcast"
            className={styles.bannerLogo}
          />
          {/* <h2 className={styles.heroTitle}>ARABIC PODCAST</h2> */}
        </div>
        <img
          src="/assets/images/podcast/wave-left.svg"
          alt=""
          className={styles.waveLeft}
        />
        <img
          src="/assets/images/podcast/wave-right.svg"
          alt=""
          className={styles.waveRight}
        />
      </section>
      {/* Season Cards Row */}
      <section className={styles.seasonCardsSection}>
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
                      <img src={card.image} alt={`Season ${card.season}`} />
                    </div>
                    <div className={styles.cardTextContent}>
                      <p className={styles.seasonCardLabel}>
                        Season {card.season}
                      </p>
                      <p className={styles.seasonCardHost}>
                        {t("pages.podcasts.podcasts.text_hosted_by")}<br />
                        {card.host}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                  {t("pages.podcasts.podcasts.text_learn_levantine_arabic_through_real_conversations")}</h1>
                <p>
                  {t("pages.podcasts.podcasts.text_this_podcast_is_intended_for_levantine_colloquial_")}</p>
                <p>
                  {t("pages.podcasts.podcasts.text_the_deewan_team_conducts_interviews_with_arabic_st")}</p>
                <p>
                  {t("pages.podcasts.podcasts.text_every_season_of_our_podcast_is_accompanied_by_a_bo")}</p>
              </div>
            </div>

            {/* Right Side: Illustration */}
            <div className="col-md-6">
              <div className={styles.illustrationWrapper}>
                <img
                  src="/assets/images/podcast/podcast-01.png"
                  alt="Podcast illustration"
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
                  hostedBy={s.hostedBy}
                  episodes={s.episodes}
                  bookCoverImage={s.bookCover}
                  bookCoverAlt={s.bookAlt}
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

export default Podcasts;
