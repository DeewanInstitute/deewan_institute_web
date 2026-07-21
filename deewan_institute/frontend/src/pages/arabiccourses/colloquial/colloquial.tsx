import { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";
import ShadowBanner from "../../../components/shadowbanner/shadowbanner";
import { useScrollAnimation } from "../../../../hooks/scrollAnimations";
import style from "./colloquial.module.scss";
import "../../../style/animation.scss";
import "bootstrap";
import FloatingActionButton from "../../../components/floatingbutton/floatingactionbutton";
import FloatingActionButtonInstitute from "../../../components/floatingbutton/floatingactionbuttoninstitute";
import HeroTitle from "../../../components/herotitle/herotitle";

function Colloquial() {
  useEffect(() => {
    document.title = "Colloquial Levantine Arabic";
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
          title: "Colloquial Levantine Arabic",
          backgroundImg: "/assets/images/banner/colloquial-banner.png",
          rgbColor: "97, 91, 91, 0.4",
          titleBgColor: "97, 91, 91",
        }}
      />

      <div className={style.colloquial}>
        <main>
          {/* Hero Title */}
          <HeroTitle
            subtitle="Colloquial Levantine Arabic"
            title="Your Journey into Arabic Language and Culture Starts Here"
            color="rgb(97 91 91)"
          />

          {/* What Is It? */}
          <section className={`${style.offer} scroll-section slide-in-left`}>
            <h2>What Is It?</h2>
            <hr className={style.offerDivider} />
            <p>
              Learn the Arabic spoken in everyday life across Jordan, Palestine,
              Lebanon, and Syria through our Colloquial Levantine Arabic course.
              Designed for students who want to communicate naturally with
              native speakers, this course focuses on the language used in daily
              conversations, social interactions, and real-life situations
              throughout the Levant region
            </p>
            <p>
              Whether you are living, working, studying, or traveling in the
              region, this course provides the linguistic and cultural tools
              needed to communicate effectively and understand the rich
              diversity of Levantine culture.
            </p>
          </section>
        </main>

        {/* Full-width image */}
        <section
          className={`${style.imageSection} scroll-section slide-in-right`}
        >
          <img
            src="/assets/images/others/colloquial-pic.png"
            alt="student studying Arabic"
            className={style.fullImage}
          />
        </section>
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
            Students will improve their speaking and listening skills while
            learning everyday vocabulary, common expressions, and pronunciation
            used throughout the Levant. The course focuses on practical
            communication through conversations and interactive activities,
            helping students build confidence in real-life situations and
            communicate naturally with Arabic speakers.
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
      <div className={style.colloquial}>
<section className={`${style.fees} scroll-section slide-in-left`}>
          <h2>Course Fees</h2>
          <hr className={style.feesDivider} />

          <div className={`row align-items-center ${style.feesContent}`}>
            {/* Left: image */}
<div className="col-12 col-md-6 scroll-section slide-in-left">
              <img
                src="/assets/images/others/colloquial-pic1.png"
                alt="students at class"
                className={style.feesImage}
              />
            </div>

            {/* Right: description + CTA */}
<div className={`col-12 col-md-6 scroll-section slide-in-right ${style.feesText}`}>
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

export default Colloquial;
