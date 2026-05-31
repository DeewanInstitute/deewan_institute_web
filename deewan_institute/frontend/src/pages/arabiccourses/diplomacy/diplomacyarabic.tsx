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

function DiplomacyArabic() {
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
          backgroundImg: "/assets/images/banner/diplomacy-banner.png",
          rgbColor: "26, 34, 53, 0.8",
          titleBgColor: "26, 34, 53",
        }}
      />

      <div className={style.diplomacyArabic}>
        <main>
          {/* Hero Title */}
          <HeroTitle
            subtitle="Diplomacy in Arabic"
            title="Master the Language of International Relations and Official Communication"
          />

          {/* Full-width image */}
          <section className={`${style.imageSection} scroll-section`}>
            <img
              src="../assets/images/others/diplomacy-pic.png"
              alt="diplomatic meeting"
              className={style.fullImage}
            />
          </section>

          {/* What We Offer */}
          <section className={`${style.offer} scroll-section`}>
            <h2>What Is It?</h2>
            <hr className={style.offerDivider} />
            <p>
              Develop the language skills needed for international relations,
              diplomacy, and official communication through our Diplomacy Arabic
              course. Designed for advanced Arabic learners, diplomats,
              researchers, and international professionals, the course focuses
              on the specialized Arabic used in governmental, diplomatic, and
              international settings across the Arab world.
            </p>
            <p>
              Through authentic speeches, official statements, policy documents,
              and diplomatic texts, students will build a strong command of
              diplomatic vocabulary, formal communication styles, and political
              discourse. The course also provides valuable cultural and regional
              insights, helping participants communicate confidently and
              effectively in professional international environments.
            </p>
          </section>
          {/* Skills You'll Develop */}
          <section className={style.skills}>
            <div className={style.skillsInner}>
              <h2 className="scroll-section">Skills You’ll Develop</h2>
              <hr className={style.skillsDivider} />

              <div
                className={`row justify-content-center ${style.skillsCards}`}
              >
                <div className="col-12 col-md-3 d-flex flex-column align-items-center scroll-section">
                  <div className={style.skillsIcon}>
                    <img
                      src="/assets/images/icons/dipicon1.png"
                      alt="Diplomatic Communication"
                      className={style.skillsImg}
                    />
                  </div>
                  <p>
                    Diplomatic
                    <br />
                    Communication
                  </p>
                </div>

                <div className="col-12 col-md-3 d-flex flex-column align-items-center scroll-section">
                  <div className={style.skillsIcon}>
                    <img
                      src="/assets/images/icons/dipicon2.png"
                      alt="Negotiation"
                      className={style.skillsImg}
                    />
                  </div>
                  <p>Negotiation</p>
                </div>

                <div className="col-12 col-md-3 d-flex flex-column align-items-center scroll-section">
                  <div className={style.skillsIcon}>
                    <img
                      src="/assets/images/icons/dipicon3.png"
                      alt="Political Analysis"
                      className={style.skillsImg}
                    />
                  </div>
                  <p>Political Analysis</p>
                </div>

                <div className="col-12 col-md-3 d-flex flex-column align-items-center scroll-section">
                  <div className={style.skillsIcon}>
                    <img
                      src="/assets/images/icons/dipicon4.png"
                      alt="International Relations"
                      className={style.skillsImg}
                    />
                  </div>
                  <p>
                    International
                    <br />
                    Relations
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </Fragment>
  );
}

export default DiplomacyArabic;
