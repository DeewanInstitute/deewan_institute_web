import { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";
import ShadowBanner from "../../../components/shadowbanner/shadowbanner";
import { useScrollAnimation } from "../../../../hooks/scrollAnimations";
import style from "./middleeasternstudies.module.scss";
import "../../../style/animation.scss";
import "bootstrap";
import FloatingActionButton from "../../../components/floatingbutton/floatingactionbutton";
import FloatingActionButtonInstitute from "../../../components/floatingbutton/floatingactionbuttoninstitute";
import HeroTitle from "../../../components/herotitle/herotitle";
import { useTranslation } from "react-i18next";
import BottomBanner from "../../../components/bottombanner/bottombanner";

interface Article {
  title: string;
  slug: string;
}

function MiddleEasternStudies() {
    const { t } = useTranslation();
  useEffect(() => {
    document.title = "Middle Eastern Studies";
  }, []);

  useScrollAnimation();
  const navigate = useNavigate();

  // Translated — must live inside the component to access `t`
  const articles: Article[] = [
    {
      title: t("pages.arabiccourses.middleeastern.middleeasternstudies.title_history_of_the_middle_east"),
      slug: "history-of-the-middle-east",
    },
    {
      title: t("pages.arabiccourses.middleeastern.middleeasternstudies.title_modern_history_of_the_middle_east"),
      slug: "modern-history-of-the-middle-east",
    },
    {
      title: t("pages.arabiccourses.middleeastern.middleeasternstudies.title_the_zionist_project_in_palestine"),
      slug: "the-zionist-project-in-palestine",
    },
    {
      title: t("pages.arabiccourses.middleeastern.middleeasternstudies.title_the_people_of_the_middle_east"),
      slug: "people-of-the-middle-east",
    },
  ];

  return (
    <Fragment>
      {/* NavBar */}
      <NavBar />
      <FloatingActionButton />
      <FloatingActionButtonInstitute />

      {/* Banner */}
      <ShadowBanner
        data={{
          title: t("pages.arabiccourses.middleeastern.middleeasternstudies.title_middle_eastern_studies"),
          backgroundImg: "/assets/images/banner/mes-banner.webp",
          rgbColor: "119, 82, 34, 0.53",
          titleBgColor: "184, 92, 53",
        }}
      />

      <div className={style.middleEasternStudies}>
        <main>
          {/* Hero Title */}
          <HeroTitle
            subtitle={t("pages.arabiccourses.middleeastern.middleeasternstudies.title_middle_eastern_studies")}
            title={t("pages.arabiccourses.middleeastern.middleeasternstudies.title_explore_the_history_cultures_societies_and_contem")}
            color="#B85C38"
          />

          {/* What Is It? */}
          <section className={`${style.offer} scroll-section slide-in-left`}>
            <h2>{t("pages.arabiccourses.msa.msa.text_what_is_it")}</h2>
            <hr className={style.offerDivider} />
            <p>
              {t("pages.arabiccourses.middleeastern.middleeasternstudies.text_gain_a_deeper_understanding_of_the_middle_east_thr")}</p>
            <p>
              {t("pages.arabiccourses.middleeastern.middleeasternstudies.text_with_a_strong_focus_on_middle_eastern_history_stud")}</p>
          </section>

          {/* Full-width image */}
          <section
            className={`${style.imageSection} scroll-section slide-in-right`}
          >
            <img
              src="/assets/images/others/mes-pic.webp"
              alt={t("pages.arabiccourses.middleeastern.middleeasternstudies.alt_middle_eastern_landmark")}
              className={style.fullImage}
            />
          </section>
        </main>
      </div>

      {/* Course Highlights */}
      <section className={style.highlights}>
        <div className={style.highlightsInner}>
          <h2 className="scroll-section slide-in-left">{t("pages.arabiccourses.middleeastern.middleeasternstudies.text_course_highlights")}</h2>
          <hr className={style.highlightsDivider} />

          <div className={`row justify-content-center ${style.highlightCards}`}>
            <div className="col-12 col-md-4 d-flex flex-column align-items-center scroll-section slide-in-left">
              <div className={style.highlightIcon}>
                <img
                  src="/assets/images/icons/mes-icon1.webp"
                  alt={t("pages.arabiccourses.middleeastern.middleeasternstudies.alt_middle_eastern_history_and_civilizations")}
                  className={style.highlightImg}
                />
              </div>
              <p>
                {t("pages.arabiccourses.middleeastern.middleeasternstudies.text_middle_eastern")}<br />
                {t("pages.arabiccourses.middleeastern.middleeasternstudies.text_history_andamp_civilizations_2")}</p>
            </div>

            <div className="col-12 col-md-4 d-flex flex-column align-items-center scroll-section">
              <div className={style.highlightIcon}>
                <img
                  src="/assets/images/icons/mes-icon2.webp"
                  alt={t("pages.arabiccourses.middleeastern.middleeasternstudies.alt_culture_society_and_traditions")}
                  className={style.highlightImg}
                />
              </div>
              <p>
                {t("pages.arabiccourses.middleeastern.middleeasternstudies.text_culture_society")}<br />
                {t("pages.arabiccourses.middleeastern.middleeasternstudies.text_andamp_traditions_2")}</p>
            </div>

            <div className="col-12 col-md-4 d-flex flex-column align-items-center scroll-section slide-in-right">
              <div className={style.highlightIcon}>
                <img
                  src="/assets/images/icons/mes-icon3.webp"
                  alt={t("pages.arabiccourses.middleeastern.middleeasternstudies.alt_historical_and_contemporary_perspectives")}
                  className={style.highlightImg}
                />
              </div>
              <p>
                {t("pages.arabiccourses.middleeastern.middleeasternstudies.text_historical_andamp_contemporary_2")}<br />
                {t("pages.arabiccourses.middleeastern.middleeasternstudies.text_perspectives")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <div className={style.middleEasternStudies}>
        <section className={`${style.articles} scroll-section slide-in-left`}>
          <h2>{t("pages.arabiccourses.middleeastern.middleeasternstudies.text_middle_eastern_studies_articles")}</h2>
          <hr className={style.articlesDivider} />
          <p
            className={`${style.articlesSubtitle} scroll-section slide-in-right`}
          >
            {t("pages.arabiccourses.middleeastern.middleeasternstudies.text_browse_the_articles_below_for_additional_insights_")}</p>

          <div className={style.timeline}>
            <div className={style.timelineTrack} />

            {articles.map((article, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={article.slug}
className={`${style.timelineRow} ${
  isLeft ? style.timelineLeft : style.timelineRight
} scroll-section ${isLeft ? "slide-in-left" : "slide-in-right"}`}                >
                  {/* Dot */}
                  <div className={style.timelineDot} />

                  {/* Card */}
                  <div
                    className={style.articleCard}
                    onClick={() =>
                      navigate(`/middle-eastern-studies/${article.slug}`)
                    }
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        navigate(`/middle-eastern-studies/${article.slug}`);
                      }
                    }}
                  >
                    <span className={style.articleTitle}>{article.title}</span>
                    <button
                      className={style.readMore}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/middle-eastern-studies/${article.slug}`);
                      }}
                    >
                      {t("pages.arabiccourses.middleeastern.middleeasternstudies.text_read_more")}</button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
<BottomBanner
                        data={{
                            mainText: t("pages.arabiccourses.middleeastern.middleeasternstudies.maintext_enroll_in_middle_eastern_studies_program_now"),
                            buttonText: t("data.english.bottombannerbuttontitle_enroll_now"),
                            primaryColor: "#A60A1F",
                            backgroundImg: "../assets/images/others/mes-bottom.webp",
                        }}
                    />
      </div>

      {/* Footer */}
      <Footer />
    </Fragment>
  );
}

export default MiddleEasternStudies;
