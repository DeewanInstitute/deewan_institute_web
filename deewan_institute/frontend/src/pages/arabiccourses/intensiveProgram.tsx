import { Fragment, useEffect } from "react";
import "bootstrap";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { useScrollAnimation } from "../../../hooks/scrollAnimations";
import CurriculumSlider from "../../components/curriculumslider/curriculumslider";
import Banner from "../../components/banner/banner";
import Divider from "../../components/divider/divider";
import OpenHours from "../../components/openhours/openhours";
import Schedule from "../../components/scheduletable/schedule";
import style from "./arabic.module.scss";
import "../../style/animation.scss";
import FloatingActionButton from "../../components/floatingbutton/floatingactionbutton";
import FloatingActionButtonInstitute from "../../components/floatingbutton/floatingactionbuttoninstitute";
import { useTranslation } from "react-i18next";

function IntensiveProgram() {
    const { t } = useTranslation();
  useEffect(() => {
    document.title = "Intensive Summer & Fall Program";
  }, []);

  useScrollAnimation();

  return (
    <Fragment>
      <NavBar />
      <FloatingActionButton />
      <FloatingActionButtonInstitute />
      <Banner
        data={{
          title: t("pages.arabiccourses.intensiveProgram.title_intensive_summer_and_fall_program"),
          description: t("pages.arabiccourses.intensiveProgram.description_the_deewan_institute_for_languages_and_cult"),
          backgroundImg: "../assets/images/banner/intensiveBG.png",
        }}
      />
      <main className={style.intensive}>
        {/* First Section */}
        <section className={`${style.info} my-2 my-md-5 pt-2 pt-md-5`}>
          <div className="row justify-content-center align-items-center">
            {/* Text Column */}
            <div className="col-12 col-md-4 d-flex flex-column align-items-start justify-content-center order-1 order-md-1 mb-4 mb-md-0">
              <h1
                className={`${style.featuretteHeading} my-5 lh-base scroll-section slide-in-left`}
              >
                {t("pages.arabiccourses.intensiveProgram.text_about_the_program")}</h1>
              <p className="lead lh-base scroll-section slide-in-left">
                {t("pages.arabiccourses.intensiveProgram.text_the_deewan_institute_for_languages_and_cultural_st")}</p>
              <a
                id={style.checkBtn}
                className="text-decoration-none rounded-pill scroll-section slide-in-left mt-4"
                href="#programFee"
              >
                {t("pages.arabiccourses.intensiveProgram.text_check_out_the_program_fees")}</a>
            </div>
            {/* Image Column*/}
            <div className="col-12 col-md-5 d-flex flex-column align-items-center justify-content-center scroll-section slide-in-right order-2 order-md-2">
              <img
                className="img-fluid"
                alt="Intensive Program"
                src={"../assets/images/others/intensive1.png"}
              />
            </div>
          </div>
        </section>

        <Divider />
        <CurriculumSlider />
        <Divider />

        {/* Special Section */}
        <section className={`${style.special} py-3 my-5 scroll-section`}>
          <div className="row justify-content-center align-items-center">
            {/* Image Column */}
            <div className="col-12 col-md-5 d-flex flex-column align-items-center justify-content-center mb-4 mb-md-0 order-1 order-md-1">
              <img
                className="img-fluid"
                alt="Deewan Building"
                src={"../assets/images/others/intensive2.png"}
              />
            </div>
            {/* Text Column */}
            <div className="col-12 col-md-4 d-flex flex-column align-items-start justify-content-center order-2 order-md-2">
              <h5 className="featurette-heading mb-2 scroll-section slide-in-right">
                {t("pages.arabiccourses.intensiveProgram.text_why_us")}</h5>
              <h1 className="featurette-heading my-3 scroll-section slide-in-right">
                {t("pages.arabiccourses.intensiveProgram.text_what_makes_deewan_so_special")}</h1>
              <p className="lead">
                {t("pages.arabiccourses.intensiveProgram.text_deewan_s_intensive_fall_program_focuses_on_buildin")}</p>
              <ul className="lead scroll-section slide-in-right">
                <li>{t("pages.arabiccourses.intensiveProgram.text_price_competitive")}</li>
                <li>{t("pages.arabiccourses.intensiveProgram.text_covers_all_levels")}</li>
                <li>{t("pages.arabiccourses.intensiveProgram.text_rich_content_and_resources")}</li>
                <li>{t("pages.arabiccourses.intensiveProgram.text_native_language_partners")}</li>
                <li>{t("pages.arabiccourses.intensiveProgram.text_professional_staff_support")}</li>
              </ul>
            </div>
          </div>
        </section>

        <OpenHours data={{ backgroundColor: "#8f6e43", color: "#ffffff" }} />

        {/* Program Fees Section */}
        <section id="programFee" className={`${style.programFee} py-4 mt-4`}>
          <div className={style.title}>
            <h1 className="py-2 scroll-section slide-in-left">{t("pages.arabiccourses.intensiveProgram.text_program_fees")}</h1>
          </div>
          <Schedule
            data={{
              subtitle: t("pages.arabiccourses.intensiveProgram.subtitle_4_weeks_course"),
              iconImage: "../assets/images/icons/one.png",
              oneTotalPrice: "840 JD",
              groupTotalPrice: "880 JD",
              oneHours: "80 hours",
              groupHours: "80 hours",
            }}
          />
          <Schedule
            data={{
              subtitle: t("pages.arabiccourses.intensiveProgram.subtitle_8_weeks_course"),
              iconImage: "../assets/images/icons/two.png",
              oneTotalPrice: "1680 JD",
              groupTotalPrice: "1760 JD",
              oneHours: "160 hours",
              groupHours: "160 hours",
            }}
          />
        </section>
                    <button
                      className={style.signup}
                      onClick={() => window.open("https://docs.google.com/forms/u/1/d/e/1FAIpQLScKQTLvV48wnnLa-MG4VYBXHLXQS-5aP7IrO-8_InTxnRqGIQ/viewform")}
                    >
                      {t("pages.cultureevents.cultureEvents.text_sign_up")}</button>
      </main>
      <Footer />
    </Fragment>
  );
}

export default IntensiveProgram;
