import { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";
import ShadowBanner from "../../../components/shadowbanner/shadowbanner";
import { useScrollAnimation } from "../../../../hooks/scrollAnimations";
import style from "./mixed.module.scss";
import "../../../style/animation.scss";
import "bootstrap";
import FloatingActionButton from "../../../components/floatingbutton/floatingactionbutton";
import FloatingActionButtonInstitute from "../../../components/floatingbutton/floatingactionbuttoninstitute";
import HeroTitle from "../../../components/herotitle/herotitle";
import { useTranslation } from "react-i18next";

function Mixed() {
    const { t } = useTranslation();
  useEffect(() => {
    document.title = "Mixed Arabic (Colloquial & Fusha)";
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
          title: "Mixed Arabic (Colloquial & Fusha)",
          backgroundImg: "/assets/images/banner/mixed-banner.png",
          rgbColor: "119, 82, 34, 0.47",
          titleBgColor: "143, 110, 67",
          
        }}
      />

      <div className={style.mixed}>
        <main>
          {/* Hero Title */}
          <HeroTitle
            subtitle="Mixed Arabic (Colloquial & Fusha)"
            title={t("pages.arabiccourses.mixed.mixed.title_your_journey_into_arabic_language_and_culture_sta")}
            color="rgb(143 110 67)"
          />

          {/* What Is It*/}
          <section className={`${style.whatIsIt} scroll-sections slide-in-left`}>
            <div className={style.whatIsItText}>
              <h2>{t("pages.arabiccourses.msa.msa.text_what_is_it")}</h2>
              <hr className={style.offerDivider} />
              <p>
                {t("pages.arabiccourses.mixed.mixed.text_develop_the_ability_to_communicate_naturally_and_e")}</p>
              <p>
                {t("pages.arabiccourses.mixed.mixed.text_students_will_learn_when_and_how_to_switch_between")}</p>
              <p>
                {t("pages.arabiccourses.mixed.mixed.text_ideal_for_students_who_want_to_bridge_the_gap_betw")}</p>
            </div>

            <div className={`${style.whatIsItImage} scroll-section slide-in-right`}>
              <img
                src="/assets/images/others/mixed-pic.png"
                alt="student in Arabic class"
                className={style.sideImage}
              />
            </div>
          </section>
        </main>
      </div>

      {/* Course Fees*/}
      <section className={style.fees}>
        <div className={style.feesInner}>
          <h2 className="scroll-section">{t("pages.arabiccourses.msa.msa.text_course_fees")}</h2>
          <hr className={style.feesDivider} />

          <div className={`row align-items-center ${style.feesContent}`}>
            {/* Left: image */}
            <div className="col-12 col-md-6 scroll-section">
              <img
                src="/assets/images/others/mixed-pic1.JPG"
                alt="students at a session"
                className={style.feesImage}
              />
            </div>

            {/* Right: description + CTA */}
            <div className={`col-12 col-md-6 scroll-section ${style.feesText}`}>
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
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </Fragment>
  );
}

export default Mixed;