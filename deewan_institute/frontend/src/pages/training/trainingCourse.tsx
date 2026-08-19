import { Fragment, useEffect } from "react";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import ShadowBanner from "../../components/shadowbanner/shadowbanner";
import { useScrollAnimation } from "../../../hooks/scrollAnimations";
import style from "./trainingCourse.module.scss";
import "../../style/animation.scss";
import "bootstrap";
import FloatingActionButton from "../../components/floatingbutton/floatingactionbutton";
import FloatingActionButtonInstitute from "../../components/floatingbutton/floatingactionbuttoninstitute";
import HeroTitle from "../../components/herotitle/herotitle";
import CareerForm from "../../components/careers/careerform";
import { useTranslation } from "react-i18next";

function TrainingCourse() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "Arabic Teacher Training Course";
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
          title: t("pages.training.trainingCourse.title_arabic_teacher_training_course"),
          backgroundImg: "./assets/images/banner/training-banner.webp",
          rgbColor: "119, 82, 34, 0.55",
          titleBgColor: "143, 110, 67",
        }}
      />

      {/* Hero Title */}
      <HeroTitle
        subtitle={t("pages.training.trainingCourse.text_turn_your_arabic_skills_into_a_teaching_career")}
        title={t("pages.training.trainingCourse.text_master_the_art_of_teaching_arabic")}
        color="rgb(143 110 67)"
      />

      {/* Course Details + Registration Form */}
      <section className={style.details}>
        <div className="container">
          <div className="row g-5 align-items-start justify-content-center">

            {/* Left: course info */}
            <div className={`col-12 col-lg-6 scroll-section slide-in-left ${style.info}`}>
              <p className={style.paragraph}>
                {t("pages.training.trainingCourse.text_join_our_3_month_arabic_teacher_training_course_and")}
              </p>

              <ul className={style.metaList}>
                <li>
                  <span className={style.metaIcon}>📅</span>
                  <strong>{t("pages.training.trainingCourse.label_duration")}</strong>
                  {t("pages.training.trainingCourse.text_3_months")}
                </li>
                <li>
                  <span className={style.metaIcon}>📚</span>
                  <strong>{t("pages.training.trainingCourse.label_schedule")}</strong>
                  {t("pages.training.trainingCourse.text_monday_wednesday")}
                </li>
                <li>
                  <span className={style.metaIcon}>🎓</span>
                  <strong>{t("pages.training.trainingCourse.label_certificate")}</strong>
                  {t("pages.training.trainingCourse.text_certificate_of_completion")}
                </li>
              </ul>

              <h2 className={style.blockTitle}>
                {t("pages.training.trainingCourse.text_what_youll_gain")}
              </h2>
              <hr className={`${style.blockDivider} ${style.dividerGain}`} />
              <ul className={style.bulletList}>
                <li>{t("pages.training.trainingCourse.text_practical_arabic_teaching_skills")}</li>
                <li>{t("pages.training.trainingCourse.text_effective_teaching_methods_and_lesson_planning")}</li>
                <li>{t("pages.training.trainingCourse.text_classroom_management_techniques")}</li>
                <li>{t("pages.training.trainingCourse.text_hands_on_teaching_practice")}</li>
                <li>{t("pages.training.trainingCourse.text_a_certificate_upon_successful_completion")}</li>
              </ul>

              <h2 className={style.blockTitle}>
                {t("pages.training.trainingCourse.text_internship_opportunity")}
              </h2>
              <hr className={`${style.blockDivider} ${style.dividerInternship}`} />
              <p className={style.paragraph}>
                {t("pages.training.trainingCourse.text_after_completing_the_training_successful_participan")}
              </p>
            </div>

            {/* Right: registration form (reused from Careers) */}
            <CareerForm endpoint="/api/training-course" showPosition={false} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </Fragment>
  );
}

export default TrainingCourse;
