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

interface Article {
  title: string;
  slug: string;
}

const articles: Article[] = [
  { title: "History of the Middle East", slug: "history-of-the-middle-east" },
  {
    title: "Modern History of the Middle East",
    slug: "modern-history-of-the-middle-east",
  },
  {
    title: "The Zionist Project in Palestine",
    slug: "the-zionist-project-in-palestine",
  },
  { title: "The People of the Middle East", slug: "people-of-the-middle-east" },
];

function MiddleEasternStudies() {
  useEffect(() => {
    document.title = "Middle Eastern Studies";
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
          title: "Middle Eastern Studies",
          backgroundImg: "/assets/images/banner/mes-banner.png",
          rgbColor: "119, 82, 34, 0.53",
          titleBgColor: "184, 92, 53",
        }}
      />

      <div className={style.middleEasternStudies}>
        <main>
          {/* Hero Title */}
          <HeroTitle
            subtitle="Middle Eastern Studies"
            title="Explore the History, Cultures, Societies, and Contemporary Realities of the Middle East."
            color="#B85C38"
          />

          {/* What Is It? */}
          <section className={`${style.offer} scroll-section slide-in-left`}>
            <h2>What Is It?</h2>
            <hr className={style.offerDivider} />
            <p>
              Gain a deeper understanding of the Middle East through an
              exploration of its history, cultures, societies, and contemporary
              developments. This interdisciplinary course examines the region's
              rich heritage, major historical events, cultural traditions, and
              its role in today's global landscape.
            </p>
            <p>
              With a strong focus on Middle Eastern history, students will
              explore influential civilizations, key historical periods, and
              modern regional issues. The course is ideal for students,
              researchers, professionals, and anyone interested in developing a
              broader understanding of one of the world's most dynamic and
              influential regions.
            </p>
          </section>

          {/* Full-width image */}
          <section
            className={`${style.imageSection} scroll-section slide-in-right`}
          >
            <img
              src="/assets/images/others/mes-pic.png"
              alt="Middle Eastern landmark"
              className={style.fullImage}
            />
          </section>
        </main>
      </div>

      {/* Course Highlights */}
      <section className={style.highlights}>
        <div className={style.highlightsInner}>
          <h2 className="scroll-section slide-in-left">Course Highlights</h2>
          <hr className={style.highlightsDivider} />

          <div className={`row justify-content-center ${style.highlightCards}`}>
            <div className="col-12 col-md-4 d-flex flex-column align-items-center scroll-section slide-in-left">
              <div className={style.highlightIcon}>
                <img
                  src="/assets/images/icons/mes-icon1.png"
                  alt="Middle Eastern History & Civilizations"
                  className={style.highlightImg}
                />
              </div>
              <p>
                Middle Eastern
                <br />
                History &amp; Civilizations
              </p>
            </div>

            <div className="col-12 col-md-4 d-flex flex-column align-items-center scroll-section">
              <div className={style.highlightIcon}>
                <img
                  src="/assets/images/icons/mes-icon2.png"
                  alt="Culture, Society & Traditions"
                  className={style.highlightImg}
                />
              </div>
              <p>
                Culture, Society,
                <br />
                &amp; Traditions
              </p>
            </div>

            <div className="col-12 col-md-4 d-flex flex-column align-items-center scroll-section slide-in-right">
              <div className={style.highlightIcon}>
                <img
                  src="/assets/images/icons/mes-icon3.png"
                  alt="Historical & Contemporary perspectives"
                  className={style.highlightImg}
                />
              </div>
              <p>
                Historical &amp; Contemporary
                <br />
                perspectives
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <div className={style.middleEasternStudies}>
        <section className={`${style.articles} scroll-section slide-in-left`}>
          <h2>Middle Eastern Studies Articles</h2>
          <hr className={style.articlesDivider} />
          <p
            className={`${style.articlesSubtitle} scroll-section slide-in-right`}
          >
            Browse the articles below for additional insights into the history,
            cultures, and developments that have shaped the Middle East.
          </p>

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
                      Read More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </Fragment>
  );
}

export default MiddleEasternStudies;
