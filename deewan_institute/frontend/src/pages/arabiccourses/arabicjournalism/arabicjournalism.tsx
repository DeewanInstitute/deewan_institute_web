import { Fragment, useEffect } from "react";
import NavBar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";
import ShadowBanner from "../../../components/shadowbanner/shadowbanner";
import { useScrollAnimation } from "../../../../hooks/scrollAnimations";
import style from "./arabicjournalism.module.scss";
import "../../../style/animation.scss";
import "bootstrap";
import FloatingActionButton from "../../../components/floatingbutton/floatingactionbutton";
import FloatingActionButtonInstitute from "../../../components/floatingbutton/floatingactionbuttoninstitute";
import HeroTitle from "../../../components/herotitle/herotitle";
import { useTranslation } from "react-i18next";
import BottomBanner from "../../../components/bottombanner/bottombanner";

function ArabicJournalism() {
    const { t } = useTranslation();
  useEffect(() => {
    document.title = "Arabic Journalism";
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
          title: "Arabic Journalism",
          backgroundImg: "/assets/images/banner/journalism-hero.webp",
          rgbColor: "171, 111, 15, 0.8",
          titleBgColor: "171, 111, 15",
        }}
      />

      <div className={style.arabicJournalism}>
        <main>

          {/* Hero Title */}
<HeroTitle
  subtitle="Arabic Journalism"
  title={t("pages.arabiccourses.arabicjournalism.arabicjournalism.title_explore_media_reporting_and_storytelling_in_arabi")}
  color= "#BB8939"
/>

          {/* Full-width image */}
          <section className={`${style.imageSection} scroll-section`}>
            <img
              src="../assets/images/others/journalism-banner.webp"
              alt="Arabic newspaper"
              className={style.fullImage}
            />
          </section>

          {/* What We Offer */}
          <section className={`${style.offer} scroll-section`}>
            <h2>{t("pages.arabiccourses.arabicjournalism.arabicjournalism.text_what_we_offer")}</h2>
            <hr className={style.offerDivider} />
            <p>
              {t("pages.arabiccourses.arabicjournalism.arabicjournalism.text_develop_your_arabic_language_skills_through_the_wo")}</p>
            <p>
              {t("pages.arabiccourses.arabicjournalism.arabicjournalism.text_designed_for_advanced_learners_and_aspiring_media_")}</p>
            <p>
              {t("pages.arabiccourses.arabicjournalism.arabicjournalism.text_through_practical_exercises_writing_assignments_an")}</p>
          </section>

        </main>
<BottomBanner
                        data={{
                            mainText: "Enroll In Arabic Journalism Program Now",
                            buttonText: "Enroll Now!",
                            primaryColor: "#A60A1F",
                            backgroundImg: "../assets/images/others/journalism-bottom.webp",
                        }}
                    />
      </div>

      {/* Footer */}
      <Footer />
    </Fragment>
  );
}

export default ArabicJournalism;