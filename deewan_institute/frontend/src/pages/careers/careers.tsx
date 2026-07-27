import { Fragment, useEffect } from "react";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import styles from "./careers.module.scss";
import { useScrollAnimation } from "../../../hooks/scrollAnimations";
import JobAccordin from "../../components/careers/jobaccordin";
import CareerForm from "../../components/careers/careerform";
import FloatingActionButton from "../../components/floatingbutton/floatingactionbutton";
import FloatingActionButtonInstitute from "../../components/floatingbutton/floatingactionbuttoninstitute";
import { useTranslation } from "react-i18next";

function Career() {
    const { t } = useTranslation();
  console.log("API URL:", import.meta.env.VITE_API_URL); // Should show: http://localhost:5000

  useEffect(() => {
    document.title = "Careers";
  }, []);

  useScrollAnimation();

  return (
    <Fragment>
      <NavBar />
      <FloatingActionButton />
      <FloatingActionButtonInstitute />

      <main className={styles.career_page}>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.hero__bg} />
          <div className={styles.hero__overlay} />

          <div className={styles.hero__content}>
            <div className={styles.hero__eyebrow}>{t("pages.careers.careers.text_we_re_hiring")}</div>
            <h1 className={styles.hero__title}>
              {t("pages.careers.careers.text_shape_the_future_of_arabic_education")}</h1>
            <p className={styles.hero__sub}>
              {t("pages.careers.careers.text_join_a_team_dedicated_to_preserving_language_cultu")}</p>
            <div className={styles.hero__line} />
          </div>
        </section>

        {/* Two-column layout */}
        <section className={`${styles.content_section} mx-auto`}>
          <div className="row mx-0 justify-content-center align-items-start g-5">
            <JobAccordin />
            <CareerForm />
          </div>
        </section>

      </main>
      <Footer />
    </Fragment>
  );
}

export default Career;