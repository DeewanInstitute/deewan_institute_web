import { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";
import ShadowBanner from "../../../components/shadowbanner/shadowbanner";
import { useScrollAnimation } from "../../../../hooks/scrollAnimations";
import style from "./colloquial.module.scss";
import "../../../style/animation.scss";
import "bootstrap";
import FloatingActionButton from "../../../components/floatingbutton/floatingactionbutton";
import FloatingActionButtonInstitute from "../../../components/floatingbutton/floatingactionbuttoninstitute";
import HeroTitle from "../../../components/herotitle/herotitle";
import { useTranslation } from "react-i18next";

function Colloquial() {
    const { t } = useTranslation();
  useEffect(() => {
    document.title = "Colloquial Levantine Arabic";
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
          title: "Colloquial Levantine Arabic",
          backgroundImg: "/assets/images/banner/colloquial-banner.webp",
          rgbColor: "97, 91, 91, 0.4",
          titleBgColor: "97, 91, 91",
        }}
      />

      <div className={style.colloquial}>
        <main>
          {/* Hero Title */}
          <HeroTitle
            subtitle="Colloquial Levantine Arabic"
            title={t("pages.arabiccourses.mixed.mixed.title_your_journey_into_arabic_language_and_culture_sta")}
            color="rgb(97 91 91)"
          />

          {/* What Is It? */}
          <section className={`${style.offer} scroll-section slide-in-left`}>
            <h2>{t("pages.arabiccourses.msa.msa.text_what_is_it")}</h2>
            <hr className={style.offerDivider} />
            <p>
              {t("pages.arabiccourses.colloquial.colloquial.text_learn_the_arabic_spoken_in_everyday_life_across_jo")}</p>
            <p>
              {t("pages.arabiccourses.colloquial.colloquial.text_whether_you_are_living_working_studying_or_traveli")}</p>
          </section>
        </main>

        {/* Full-width image */}
        <section
          className={`${style.imageSection} scroll-section slide-in-right`}
        >
          <img
            src="/assets/images/others/colloquial-pic.webp"
            alt="student studying Arabic"
            className={style.fullImage}
          />
        </section>
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
            {t("pages.arabiccourses.colloquial.colloquial.text_students_will_improve_their_speaking_and_listening")}</p>

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
      <div className={style.colloquial}>
<section className={`${style.fees} scroll-section slide-in-left`}>
          <h2>{t("pages.arabiccourses.msa.msa.text_course_fees")}</h2>
          <hr className={style.feesDivider} />

          <div className={`row align-items-center ${style.feesContent}`}>
            {/* Left: image */}
<div className="col-12 col-md-6 scroll-section slide-in-left">
              <img
                src="/assets/images/others/colloquial-pic1.webp"
                alt="students at class"
                className={style.feesImage}
              />
            </div>

            {/* Right: description + CTA */}
<div className={`col-12 col-md-6 scroll-section slide-in-right ${style.feesText}`}>
              <p className={style.feesLead}>
                {t("pages.arabiccourses.msa.msa.text_find_the_cost_of_your_arabic_program_in_just_a_few")}</p>
              <ul className={style.feesList}>
                <li>{t("pages.arabiccourses.mixed.mixed.text_select_your_course")}</li>
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

export default Colloquial;
