import { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";
import ShadowBanner from "../../../components/shadowbanner/shadowbanner";
import { useScrollAnimation } from "../../../../hooks/scrollAnimations";
import style from "./msa.module.scss";
import "../../../style/animation.scss";
import "bootstrap";
import FloatingActionButton from "../../../components/floatingbutton/floatingactionbutton";
import FloatingActionButtonInstitute from "../../../components/floatingbutton/floatingactionbuttoninstitute";
import HeroTitle from "../../../components/herotitle/herotitle";

function MSA() {
  useEffect(() => {
    document.title = "Modern Standard Arabic (MSA)";
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
          title: "Modern Standard Arabic",
          backgroundImg: "/assets/images/banner/msa-banner.png",
          rgbColor: "36, 105, 32, 0.4",
          titleBgColor: "36, 105, 32",
        }}
      />

      <div className={style.msa}>
        <main>
          {/* Hero Title */}
          <HeroTitle
            subtitle="Modern Standard Arabic (MSA)"
            title="Connect with the Arab World Through Language"
            color="rgb(36, 105, 32)"
          />

          {/* Full-width image */}
          <section
            className={`${style.imageSection} scroll-section slide-in-right`}
          >
            <img
              src="/assets/images/others/msa-pic1.JPG"
              alt="student studying Arabic"
              className={style.fullImage}
            />
          </section>

          {/* What Is It? */}
          <section className={`${style.offer} scroll-section slide-in-left`}>
            <h2>What Is It?</h2>
            <hr className={style.offerDivider} />
            <p>
              Modern Standard Arabic (MSA) is the formal form of Arabic used
              throughout the Arab world in education, literature, media,
              business, and official communication. As the standard written and
              spoken language shared across Arabic-speaking countries, MSA
              provides learners with a strong foundation for understanding and
              communicating in a wide range of academic, professional, and
              cultural contexts.
            </p>
            <p>
              Suitable for learners of all levels, the course provides a
              structured path toward fluency and serves as an essential
              foundation for those interested in further studies of Arabic
              language, culture, media, business, or regional affairs.
            </p>
          </section>
        </main>
      </div>

      {/* Skills You'll Develop */}
      <section className={style.skills}>
        <div className={style.skillsInner}>
          <h2 className="scroll-section slide-in-left">
            Skills You'll Develop
          </h2>
          <hr className={style.skillsDivider} />
          <p
            className={`${style.skillsSubtitle} scroll-section slide-in-right`}
          >
            This course develops the core language skills of reading, writing,
            listening, and speaking while building proficiency in Arabic
            grammar, vocabulary, and comprehension.
          </p>

          <div className={`row justify-content-center ${style.skillsCards}`}>
            <div className="col-12 col-md-3 d-flex flex-column align-items-center scroll-section slide-in-left">
              <div className={style.skillsIcon}>
                <img
                  src="/assets/images/icons/msa-icon.png"
                  alt="Reading"
                  className={style.skillsImg}
                />
              </div>
              <p>Reading</p>
            </div>

            <div className="col-12 col-md-3 d-flex flex-column align-items-center scroll-section slide-in-left">
              <div className={style.skillsIcon}>
                <img
                  src="/assets/images/icons/msa-icon2.png"
                  alt="Writing"
                  className={style.skillsImg}
                />
              </div>
              <p>Writing</p>
            </div>

            <div className="col-12 col-md-3 d-flex flex-column align-items-center scroll-section slide-in-right">
              <div className={style.skillsIcon}>
                <img
                  src="/assets/images/icons/msa-icon3.png"
                  alt="Speaking"
                  className={style.skillsImg}
                />
              </div>
              <p>Speaking</p>
            </div>

            <div className="col-12 col-md-3 d-flex flex-column align-items-center scroll-section slide-in-right">
              <div className={style.skillsIcon}>
                <img
                  src="/assets/images/icons/msa-icon4.png"
                  alt="Listening"
                  className={style.skillsImg}
                />
              </div>
              <p>Listening</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Fees */}
      <div className={style.msa}>
        <section className={`${style.fees} scroll-section slide-in-left`}>
          <h2>Course Fees</h2>
          <hr className={style.feesDivider} />

          <div className={`row align-items-center ${style.feesContent}`}>
            {/* Left: image */}
            <div className="col-12 col-md-6 scroll-section slide-in-left">
              <img
                src="/assets/images/others/msa-pic.png"
                alt="students at class"
                className={style.feesImage}
              />
            </div>

            {/* Right: description + CTA */}
            <div
              className={`col-12 col-md-6 scroll-section slide-in-right ${style.feesText}`}
            >
              <p className={style.feesLead}>
                Find the cost of your Arabic program in just a few clicks.
              </p>
              <ul className={style.feesList}>
                <li>Select the course type.</li>
                <li>Select morning or evening time.</li>
                <li>Choose your study duration.</li>
                <li>View your estimated fees instantly.</li>
              </ul>
              <button
                className={style.feesBtn}
                onClick={() => navigate("/calculator")}
              >
                Arabic Calculator Price
              </button>
              <button
                className={style.feesBtn}
                onClick={() => window.open("https://docs.google.com/forms/u/1/d/e/1FAIpQLScKQTLvV48wnnLa-MG4VYBXHLXQS-5aP7IrO-8_InTxnRqGIQ/viewform")}
              >
                Sign Up
              </button>              
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </Fragment>
  );
}

export default MSA;
