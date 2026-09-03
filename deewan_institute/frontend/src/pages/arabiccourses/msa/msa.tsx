import { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";
import ShadowBanner from "../../../components/shadowbanner/shadowbanner";
import { useScrollAnimation } from "../../../../hooks/scrollAnimations";
import style from "./msa.module.scss";
import "../../../style/animation.scss";
import "bootstrap";
import FloatingActionButton from "../../../components/floatingbutton/floatingactionbutton";
import FloatingActionButtonInstitute from "../../../components/floatingbutton/floatingactionbuttoninstitute";
import HeroTitle from "../../../components/herotitle/herotitle";
import { useTranslation } from "react-i18next";

function MSA() {
    const { t } = useTranslation();
  useEffect(() => {
    document.title = "Modern Standard Arabic (MSA)";
  }, []);

  useScrollAnimation();
  const navigate = useNavigate();

  return (
    <Fragment>
      {/* NavBar */}
      <NavBar />
      <FloatingActionButton />
      <FloatingActionButtonInstitute />

      {/* Banner */}
      <ShadowBanner
        data={{
          title: t("pages.arabiccourses.msa.msa.title_modern_standard_arabic"),
          backgroundImg: "/assets/images/banner/msa-banner.webp",
          rgbColor: "36, 105, 32, 0.4",
          titleBgColor: "36, 105, 32",
        }}
      />

      <div className={style.msa}>
        <main>
          {/* Hero Title */}
          <HeroTitle
            subtitle={t("pages.arabiccourses.msa.msa.title_modern_standard_arabic_msa")}
            title={t("pages.arabiccourses.msa.msa.title_connect_with_the_arab_world_through_language")}
            color="rgb(36, 105, 32)"
          />

          {/* Full-width image */}
          <section
            className={`${style.imageSection} scroll-section slide-in-right`}
          >
            <img
              src="/assets/images/others/msa-pic1.webp"
              alt={t("pages.arabiccourses.msa.msa.alt_student_studying_arabic")}
              className={style.fullImage}
            />
          </section>

          {/* What Is It? */}
          <section className={`${style.offer} scroll-section slide-in-left`}>
            <h2>{t("pages.arabiccourses.msa.msa.text_what_is_it")}</h2>
            <hr className={style.offerDivider} />
            <p>
              {t("pages.arabiccourses.msa.msa.text_modern_standard_arabic_msa_is_the_formal_form_of_a")}</p>
            <p>
              {t("pages.arabiccourses.msa.msa.text_suitable_for_learners_of_all_levels_the_course_pro")}</p>
          </section>
        </main>
      </div>

      {/* Skills You'll Develop */}
      <section className={style.skills}>
        <div className={style.skillsInner}>
          <h2 className="scroll-section slide-in-left">
            {t("pages.arabiccourses.msa.msa.text_skills_you_ll_develop")}</h2>
          <hr className={style.skillsDivider} />
          <p
            className={`${style.skillsSubtitle} scroll-section slide-in-right`}
          >
            {t("pages.arabiccourses.msa.msa.text_this_course_develops_the_core_language_skills_of_r")}</p>

          <div className={`row justify-content-center ${style.skillsCards}`}>
            <div className="col-12 col-md-3 d-flex flex-column align-items-center scroll-section slide-in-left">
              <div className={style.skillsIcon}>
                <img
                  src="/assets/images/icons/msa-icon.webp"
                  alt={t("pages.arabiccourses.arabicKids.text_reading")}
                  className={style.skillsImg}
                />
              </div>
              <p>{t("pages.arabiccourses.arabicKids.text_reading")}</p>
            </div>

            <div className="col-12 col-md-3 d-flex flex-column align-items-center scroll-section slide-in-left">
              <div className={style.skillsIcon}>
                <img
                  src="/assets/images/icons/msa-icon2.webp"
                  alt={t("pages.arabiccourses.arabicKids.text_writing")}
                  className={style.skillsImg}
                />
              </div>
              <p>{t("pages.arabiccourses.arabicKids.text_writing")}</p>
            </div>

            <div className="col-12 col-md-3 d-flex flex-column align-items-center scroll-section slide-in-right">
              <div className={style.skillsIcon}>
                <img
                  src="/assets/images/icons/msa-icon3.webp"
                  alt={t("pages.arabiccourses.arabicKids.text_speaking")}
                  className={style.skillsImg}
                />
              </div>
              <p>{t("pages.arabiccourses.arabicKids.text_speaking")}</p>
            </div>

            <div className="col-12 col-md-3 d-flex flex-column align-items-center scroll-section slide-in-right">
              <div className={style.skillsIcon}>
                <img
                  src="/assets/images/icons/msa-icon4.webp"
                  alt={t("pages.arabiccourses.arabicKids.text_listening")}
                  className={style.skillsImg}
                />
              </div>
              <p>{t("pages.arabiccourses.arabicKids.text_listening")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Fees */}
      <div className={style.msa}>
        <section className={`${style.fees} scroll-section slide-in-left`}>
          <h2>{t("pages.arabiccourses.msa.msa.text_course_fees")}</h2>
          <hr className={style.feesDivider} />

          <div className={`row align-items-center ${style.feesContent}`}>
            {/* Left: image */}
            <div className="col-12 col-md-6 scroll-section slide-in-left">
              <img
                src="/assets/images/others/msa-pic.webp"
                alt={t("pages.arabiccourses.msa.msa.alt_students_at_class")}
                className={style.feesImage}
              />
            </div>

            {/* Right: description + CTA */}
            <div
              className={`col-12 col-md-6 scroll-section slide-in-right ${style.feesText}`}
            >
              <p className={style.feesLead}>
                {t("pages.arabiccourses.msa.msa.text_find_the_cost_of_your_arabic_program_in_just_a_few")}</p>
              <ul className={style.feesList}>
                <li>{t("pages.arabiccourses.msa.msa.text_select_the_course_type")}</li>
                <li>{t("pages.arabiccourses.msa.msa.text_select_morning_or_evening_time")}</li>
                <li>{t("pages.arabiccourses.msa.msa.text_choose_your_study_duration")}</li>
                <li>{t("pages.arabiccourses.msa.msa.text_view_your_estimated_fees_instantly")}</li>
              </ul>
              <button
                className={style.feesBtn}
                onClick={() => navigate("/calculator")}
              >
                {t("pages.arabiccourses.msa.msa.text_arabic_calculator_price")}</button>
              <button
                className={style.feesBtn}
                onClick={() => window.open("https://docs.google.com/forms/u/1/d/e/1FAIpQLScKQTLvV48wnnLa-MG4VYBXHLXQS-5aP7IrO-8_InTxnRqGIQ/viewform")}
              >
                {t("pages.cultureevents.cultureEvents.text_sign_up")}</button>              
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </Fragment>
  );
}

export default MSA;
