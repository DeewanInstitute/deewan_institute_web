import { Fragment, useEffect } from "react";
import NavBar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";
import ShadowBanner from "../../../components/shadowbanner/shadowbanner";
import { useScrollAnimation } from "../../../../hooks/scrollAnimations";
import style from "./arabicafe.module.scss";
import "../../../style/animation.scss";
import "bootstrap";
import FloatingActionButton from "../../../components/floatingbutton/floatingactionbutton";
import FloatingActionButtonInstitute from "../../../components/floatingbutton/floatingactionbuttoninstitute";
import HeroTitle from "../../../components/herotitle/herotitle";
import { useTranslation } from "react-i18next";

function ArabiCafe() {
    const { t } = useTranslation();
  useEffect(() => {
    document.title = "Online ArabiCafe";
  }, []);

  useScrollAnimation();

  return (
    <Fragment>
      {/* NavBar */}
      <NavBar />
      <FloatingActionButton />
      <FloatingActionButtonInstitute />

      {/* Banner */}
      <ShadowBanner
        data={{
          title: t("pages.arabiccourses.arabicafe.arabicafe.title_online_arabicafe"),
          backgroundImg: "/assets/images/banner/arabicafe.webp",
          rgbColor: "119, 82, 34",
          titleBgColor: "0, 80, 60",
        }}
      />

      <div className={style.arabiCafe}>
        <main>
          {/* Hero Title */}
<HeroTitle
  subtitle={t("pages.arabiccourses.arabicafe.arabicafe.title_online_arabicafe")}
  title={t("pages.arabiccourses.arabicafe.arabicafe.title_practice_levantine_arabic_through_real_conversati")}
  color= "#0d5071"
/>

          {/* About Section */}
          <section className={`${style.about} scroll-section`}>
            <div className="row justify-content-center mx-auto">
              <div className="col-12 col-lg-5 d-flex flex-column justify-content-center scroll-section slide-in-left">
                <p>
                  {t("pages.arabiccourses.arabicafe.arabicafe.text_online_arabicafe_is_an_interactive_online_conversa")}</p>
                <p>
                  {t("pages.arabiccourses.arabicafe.arabicafe.text_rather_than_focusing_on_traditional_classroom_stru")}</p>
                <p>
                  {t("pages.arabiccourses.arabicafe.arabicafe.text_the_program_is_ideal_for_students_who_already_stud")}</p>
              </div>
              <div className="col-12 col-lg-5 d-flex align-items-center justify-content-center mt-4 mt-lg-0 scroll-section slide-in-right">
                <div className={style.imageWrapper}>
                  <img
                    className="img-fluid"
                    src="../assets/images/others/arabicafe1.webp"
                    alt={t("pages.arabiccourses.arabicafe.arabicafe.alt_arabicafe_session")}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Program Schedule */}
          <section className={style.schedule}>
            <div className={style.scheduleInner}>
              <h2 className="scroll-section slide-in-left">{t("pages.arabiccourses.arabicafe.arabicafe.text_program_schedule")}</h2>
              <hr className={style.scheduleDivider} />
              <div
                className={`row justify-content-center ${style.scheduleCards}`}
              >
                {/* Days */}
      <div className="col-12 col-md-4 d-flex flex-column align-items-center scroll-section slide-in-left">
                  <div className={style.scheduleIcon}>
                    <img
                      src="../assets/images/icons/clock.webp"
                      alt={t("pages.arabiccourses.arabicafe.arabicafe.alt_days")}
                      className={style.scheduleImg}
                    />
                  </div>
                  <p>{t("pages.arabiccourses.arabicafe.arabicafe.text_days_monday_andamp_wednesday")}</p>
                </div>

                {/* Time */}
      <div className="col-12 col-md-4 d-flex flex-column align-items-center scroll-section">
                  <div className={style.scheduleIcon}>
                    <img
                      src="../assets/images/icons/calendar.webp"
                      alt={t("pages.arabiccourses.arabicafe.arabicafe.alt_time")}
                      className={style.scheduleImg}
                    />
                  </div>
                  <p>{t("pages.arabiccourses.arabicafe.arabicafe.text_time_6_20_pm_8_00_pm_jordan_time")}</p>
                </div>

                {/* Format */}
      <div className="col-12 col-md-4 d-flex flex-column align-items-center scroll-section slide-in-right">
                  <div className={style.scheduleIcon}>
                    <img
                      src="/assets/images/icons/bigworld.webp"
                      alt={t("pages.arabiccourses.arabicafe.arabicafe.alt_online_format")}
                      className={style.scheduleImg}
                    />
                  </div>
                  <p>{t("pages.arabiccourses.arabicafe.arabicafe.text_format_online_interactive_sessions")}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Who Can Join */}
          <section className={`${style.whoCanJoin} scroll-section`}>
            <div className="row justify-content-center mx-auto align-items-center">
    <div className="col-12 col-lg-5 mb-4 mb-lg-0 scroll-section slide-in-left">
                <div className={style.imageWrapper}>
                  <img
                    className="img-fluid"
                    src="../assets/images/others/arabicafe2.webp"
                    alt={t("pages.arabiccourses.arabicafe.arabicafe.alt_students_studying_arabic")}
                  />
                </div>
              </div>
    <div className="col-12 col-lg-5 d-flex flex-column justify-content-center scroll-section slide-in-right">
                <h2 className={style.whoTitle}>{t("pages.arabiccourses.arabicafe.arabicafe.text_who_can_join")}</h2>
                <hr className={style.whoLine} />
                <p>
                  {t("pages.arabiccourses.arabicafe.arabicafe.text_online_arabicafe_is_best_suited_for_learners_who_a")}</p>
                <p className={style.minLabel}>{t("pages.arabiccourses.arabicafe.arabicafe.text_minimum_requirement")}</p>
                <p>
                  {t("pages.arabiccourses.arabicafe.arabicafe.text_students_should_have")}<strong>{t("pages.arabiccourses.arabicafe.arabicafe.text_at_least_a_b1_level")}</strong> {t("pages.arabiccourses.arabicafe.arabicafe.text_in_arabic_or_an_equivalent_conversational_ability_")}</p>
                <a
                  className={`text-decoration-none text-white ${style.signUpBtn}`}
                  href="https://docs.google.com/forms/d/e/1FAIpQLScKQTLvV48wnnLa-MG4VYBXHLXQS-5aP7IrO-8_InTxnRqGIQ/viewform"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("pages.cultureevents.cultureEvents.text_sign_up")}</a>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </Fragment>
  );
}

export default ArabiCafe;
