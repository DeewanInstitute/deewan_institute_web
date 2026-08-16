import { Fragment, useEffect } from "react";
import NavBar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";
import ShadowBanner from "../../../components/shadowbanner/shadowbanner";
import { useScrollAnimation } from "../../../../hooks/scrollAnimations";
import style from "./diplomacyarabic.module.scss";
import "../../../style/animation.scss";
import "bootstrap";
import FloatingActionButton from "../../../components/floatingbutton/floatingactionbutton";
import FloatingActionButtonInstitute from "../../../components/floatingbutton/floatingactionbuttoninstitute";
import HeroTitle from "../../../components/herotitle/herotitle";
import { useTranslation } from "react-i18next";
import BottomBanner from "../../../components/bottombanner/bottombanner";

function DiplomacyArabic() {
    const { t } = useTranslation();
  useEffect(() => {
    document.title = "Diplomacy in Arabic";
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
          title: "Diplomacy in Arabic",
          backgroundImg: "/assets/images/banner/diplomacy-banner.webp",
          rgbColor: "26, 34, 53, 0.8",
          titleBgColor: "26, 34, 53",
        }}
      />

      <div className={style.diplomacyArabic}>
        <main>
          {/* Hero Title */}
          <HeroTitle
            subtitle="Diplomacy in Arabic"
            title={t("pages.arabiccourses.diplomacy.diplomacyarabic.title_master_the_language_of_international_relations_an")}
          />

          {/* Full-width image */}
          <section className={`${style.imageSection} scroll-section`}>
            <img
              src="../assets/images/others/diplomacy-pic.webp"
              alt="diplomatic meeting"
              className={style.fullImage}
            />
          </section>

          {/* What We Offer */}
          <section className={`${style.offer} scroll-section`}>
            <h2>{t("pages.arabiccourses.msa.msa.text_what_is_it")}</h2>
            <hr className={style.offerDivider} />
            <p>
              {t("pages.arabiccourses.diplomacy.diplomacyarabic.text_develop_the_language_skills_needed_for_internation")}</p>
            <p>
              {t("pages.arabiccourses.diplomacy.diplomacyarabic.text_through_authentic_speeches_official_statements_pol")}</p>
          </section>
          {/* Skills You'll Develop */}
          <section className={style.skills}>
            <div className={style.skillsInner}>
              <h2 className="scroll-section">{t("pages.arabiccourses.diplomacy.diplomacyarabic.text_skills_you_ll_develop")}</h2>
              <hr className={style.skillsDivider} />

              <div
                className={`row justify-content-center ${style.skillsCards}`}
              >
                <div className="col-12 col-md-3 d-flex flex-column align-items-center scroll-section">
                  <div className={style.skillsIcon}>
                    <img
                      src="/assets/images/icons/dipicon1.webp"
                      alt="Diplomatic Communication"
                      className={style.skillsImg}
                    />
                  </div>
                  <p>
                    {t("pages.arabiccourses.diplomacy.diplomacyarabic.text_diplomatic")}<br />
                    {t("pages.arabiccourses.diplomacy.diplomacyarabic.text_communication")}</p>
                </div>

                <div className="col-12 col-md-3 d-flex flex-column align-items-center scroll-section">
                  <div className={style.skillsIcon}>
                    <img
                      src="/assets/images/icons/dipicon2.webp"
                      alt={t("pages.arabiccourses.diplomacy.diplomacyarabic.text_negotiation")}
                      className={style.skillsImg}
                    />
                  </div>
                  <p>{t("pages.arabiccourses.diplomacy.diplomacyarabic.text_negotiation")}</p>
                </div>

                <div className="col-12 col-md-3 d-flex flex-column align-items-center scroll-section">
                  <div className={style.skillsIcon}>
                    <img
                      src="/assets/images/icons/dipicon3.webp"
                      alt={t("pages.arabiccourses.diplomacy.diplomacyarabic.text_political_analysis")}
                      className={style.skillsImg}
                    />
                  </div>
                  <p>{t("pages.arabiccourses.diplomacy.diplomacyarabic.text_political_analysis")}</p>
                </div>

                <div className="col-12 col-md-3 d-flex flex-column align-items-center scroll-section">
                  <div className={style.skillsIcon}>
                    <img
                      src="/assets/images/icons/dipicon4.webp"
                      alt="International Relations"
                      className={style.skillsImg}
                    />
                  </div>
                  <p>
                    {t("pages.arabiccourses.diplomacy.diplomacyarabic.text_international")}<br />
                    {t("pages.arabiccourses.diplomacy.diplomacyarabic.text_relations")}</p>
                </div>
              </div>
            </div>
          </section>
        </main>
<BottomBanner
                        data={{
                            mainText: "Enroll In Diplomacy Program Now",
                            buttonText: "Enroll Now!",
                            primaryColor: "#A60A1F",
                            backgroundImg: "../assets/images/others/diplomacy-bottom.webp",
                        }}
                    />
      </div>

      {/* Footer */}
      <Footer />
    </Fragment>
  );
}

export default DiplomacyArabic;
