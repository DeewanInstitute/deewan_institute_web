import "bootstrap";
import { Fragment } from "react";
import { useEffect } from "react";
import styles from "./cultureEvents.module.scss";
import "../../style/animation.scss";
import { useScrollAnimation } from "../../../hooks/scrollAnimations";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { events, SIGNUP_LINK } from "../../../data/cultureEvents.data";
import type { EventMeta } from "../../../data/cultureEvents.data";
import FloatingActionButton from "../../components/floatingbutton/floatingactionbutton";
import FloatingActionButtonInstitute from "../../components/floatingbutton/floatingactionbuttoninstitute";
import { useTranslation } from "react-i18next";

function EventMetaBlock({ meta }: { meta: EventMeta }) {
    const { t } = useTranslation();
  return (
    <div className={styles.eventMeta}>
      <p>
        <strong>{t("pages.cultureevents.cultureEvents.text_time")}</strong> {meta.time}
      </p>
      {meta.oneToOne && (
        <p>
          <strong>{t("pages.cultureevents.cultureEvents.text_one_to_one")}</strong> {meta.oneToOne}
        </p>
      )}
      {meta.group && (
        <p>
          <strong>{t("pages.cultureevents.cultureEvents.text_group_session")}</strong> {meta.group}
        </p>
      )}
      {meta.cost && (
        <p>
          <strong>{t("pages.cultureevents.cultureEvents.text_cost")}</strong> {meta.cost}
        </p>
      )}
    </div>
  );
}

function CultureEvents() {
    const { t } = useTranslation();
    useEffect(() => {
      document.title = "Cultural Events";
    }, []);
  useScrollAnimation();

  return (
    <Fragment>
      <NavBar />
      <FloatingActionButton />
      <FloatingActionButtonInstitute />

      {/* ── Banner ── */}
      <section className={`${styles.banner} scroll-section`}>
        <div className={styles.bannerContent}>
          <span className={styles.bannerEyebrow}>{t("pages.cultureevents.cultureEvents.text_deewan_institute")}</span>
          <h1>
            {t("pages.cultureevents.cultureEvents.text_experience_culture")}<br />
            {t("pages.cultureevents.cultureEvents.text_connect_through_language")}<br />
            {t("pages.cultureevents.cultureEvents.text_learn_together")}</h1>
          <div className={styles.bannerRule} />
        </div>
      </section>

      {/* ── Intro ── */}
      <section className={`${styles.intro} scroll-section`}>
       <div className="row justify-content-center align-items-center g-5 flex-column flex-md-row">
         <div className="col-12 col-sm-10 col-xl-6 d-flex flex-column">
            <span className={styles.introLabel}>{t("pages.cultureevents.cultureEvents.text_cultural_events")}</span>
            <p className="lead">
              {t("pages.cultureevents.cultureEvents.text_at_deewan_institute_we_invite_students_and_guests_")}</p>
          </div>
         <div className="col-12 col-sm-10 col-xl-6 d-flex justify-content-center">
            <img
              className={styles.introImg}
              src="/assets/images/others/culture1.webp"
              alt={t("pages.cultureevents.cultureEvents.alt_cultural_events_at_deewan")}
            />
          </div>
        </div>
      </section>

      {/* ── Living Cultural Space ── */}
      <section className={`${styles.livingSpace} scroll-section`}>
        <div className="row justify-content-center align-items-center g-5 flex-column flex-md-row">
          <div className="col-12 col-sm-10 col-xl-6 d-flex justify-content-center order-md-1 order-2">
            <img
              className={styles.livingImg}
              src="/assets/images/others/culture9.webp"
              alt={t("pages.cultureevents.cultureEvents.text_a_living_cultural_space")}
            />
          </div>
          <div className="col-12 col-sm-10 col-xl-6 order-md-2 order-1">
            <span className={styles.livingLabel}>{t("pages.cultureevents.cultureEvents.text_our_philosophy")}</span>
            <h2>{t("pages.cultureevents.cultureEvents.text_a_living_cultural_space")}</h2>
            <p className={`${styles.livingText} mt-4`}>
              {t("pages.cultureevents.cultureEvents.text_our_cultural_events_are_designed_to_go_beyond_the_")}</p>
          </div>
        </div>
      </section>

      {/* ── Event Sections ── */}
      {events.map((event, i) => (
        <Fragment key={event.index}>
          <hr className={`${styles.divider} scroll-section`} />
          <section
            className={`${styles.eventSection} ${event.altBg ? styles.altBg : ""} scroll-section`}
          >
            <span
              className={`${styles.eventIndex} ${i % 2 !== 0 ? styles.eventIndexRight : ""}`}
            >
              {event.index}
            </span>

            <div className="row justify-content-center align-items-center g-4 g-md-5 flex-column flex-xl-row">
              {/* Text column */}
              <div className={`col-12 col-sm-10 col-xl-6 d-flex flex-column ${event.imageLeft ? "order-md-2" : "order-md-1"} order-2`}>
                <span
                  className={`${styles.eventLabel} ${styles[event.accentKey]}`}
                >
                  {event.label}
                </span>
                <h2
                  className={`${styles.eventTitle} ${styles[event.accentKey]}`}
                >
                  {event.title}
                </h2>
                <p className={styles.eventBody}>{event.body}</p>
                <EventMetaBlock meta={event.meta} />
                <div>
                  <a
                    href={SIGNUP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className={`${styles.signUpBtn} ${styles[event.btnKey]} ${styles[event.accentKey]}`}
                  >
                    {t("pages.cultureevents.cultureEvents.text_sign_up")}</a>
                </div>
              </div>

              {/* Image column */}
              <div className={`col-12 col-sm-10 col-xl-6 d-flex justify-content-center ${event.imageLeft ? "order-md-1" : "order-md-2"} order-1`}>
                <img
                  className={styles.eventImg}
                  src={event.image}
                  alt={event.imageAlt}
                />
              </div>
            </div>
          </section>
        </Fragment>
      ))}

      <hr className={`${styles.divider} mb-0`} />
      <Footer />
    </Fragment>
  );
}

export default CultureEvents;
