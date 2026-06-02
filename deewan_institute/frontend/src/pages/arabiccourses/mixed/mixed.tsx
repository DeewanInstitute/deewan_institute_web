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

function Mixed() {
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
            title="Your Journey into Arabic Language and Culture Starts Here"
            color="rgb(143 110 67)"
          />

          {/* What Is It*/}
          <section className={`${style.whatIsIt} scroll-sections slide-in-left`}>
            <div className={style.whatIsItText}>
              <h2>What Is It?</h2>
              <hr className={style.offerDivider} />
              <p>
                Develop the ability to communicate naturally and effectively
                through our Mixed Arabic course. This course focuses on Arabic
                diglossia—the practice of combining Modern Standard Arabic (MSA)
                with colloquial Arabic, a common feature of everyday
                communication across the Arab world.
              </p>
              <p>
                Students will learn when and how to switch between formal and
                informal Arabic depending on the situation, audience, and
                context. Through practical conversations, interactive
                activities, and real-life examples, participants will build
                confidence in understanding and using the Arabic spoken in both
                professional and social settings.
              </p>
              <p>
                Ideal for students who want to bridge the gap between classroom
                Arabic and everyday communication, this course provides valuable
                linguistic and cultural skills for living, studying, working, or
                traveling in the Arab world.
              </p>
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
          <h2 className="scroll-section">Course Fees</h2>
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
                Find the cost of your Arabic program in just a few clicks.
              </p>
              <ul className={style.feesList}>
                <li>Select your course.</li>
                <li>Choose your study duration.</li>
                <li>View your estimated fees instantly.</li>
              </ul>
              <button
                className={style.feesBtn}
                onClick={() => navigate("/calculator")}
              >
                Arabic Calculator Price
              </button>
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