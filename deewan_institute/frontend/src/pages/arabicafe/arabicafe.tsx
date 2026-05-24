import { Fragment, useEffect } from "react";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import ShadowBanner from "../../components/shadowbanner/shadowbanner";
import { useScrollAnimation } from "../../../hooks/scrollAnimations";
import style from "./arabicafe.module.scss";
import "../../style/animation.scss";
import "bootstrap";
import FloatingActionButton from "../../components/floatingbutton/floatingactionbutton";
import FloatingActionButtonInstitute from "../../components/floatingbutton/floatingactionbuttoninstitute";

function ArabiCafe() {
  useEffect(() => {
    document.title = "Online ArabiCafe";
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
          title: "Online ArabiCafe",
          backgroundImg: "/assets/images/banner/arabicafe.png",
          rgbColor: "119, 82, 34",
          titleBgColor: "0, 80, 60",
        }}
      />

      <div className={style.arabiCafe}>
        <main>
          {/* Hero Title */}
          <section className={`${style.hero} scroll-section`}>
            <p className={style.subtitle}>Online ArabiCafe</p>
            <h1>Practice Levantine Arabic Through Real Conversation</h1>
            <hr className={style.divider} />
          </section>

          {/* About Section */}
          <section className={`${style.about} scroll-section`}>
            <div className="row justify-content-center mx-auto">
              <div className="col-12 col-lg-5 d-flex flex-column justify-content-center">
                <p>
                  Online ArabiCafe is an interactive online conversation program
                  designed for learners who want to improve their Levantine
                  colloquial Arabic through natural communication and meaningful
                  social interaction in a relaxed café-style environment.
                </p>
                <p>
                  Rather than focusing on traditional classroom structure,
                  ArabiCafe Online encourages students to actively use Arabic
                  through guided discussions, cultural topics, storytelling,
                  games, and interactive group activities. The sessions create a
                  supportive space where learners can build confidence, improve
                  fluency, and engage in authentic spoken Arabic with
                  participants from around the world.
                </p>
                <p>
                  The program is ideal for students who already study Arabic and
                  are looking for additional conversational practice and greater
                  exposure to everyday Levantine Arabic.
                </p>
              </div>
              <div className="col-12 col-lg-5 d-flex align-items-center justify-content-center mt-4 mt-lg-0">
                <div className={style.imageWrapper}>
                  <img
                    className="img-fluid"
                    src="../assets/images/others/arabicafe1.png"
                    alt="ArabiCafe session"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Program Schedule */}
          <section className={style.schedule}>
            <div className={style.scheduleInner}>
              <h2 className="scroll-section">Program Schedule</h2>
              <hr className={style.scheduleDivider} />
              <div
                className={`row justify-content-center ${style.scheduleCards}`}
              >
                {/* Days */}
                <div className="col-12 col-md-4 d-flex flex-column align-items-center scroll-section">
                  <div className={style.scheduleIcon}>
                    <img
                      src="../assets/images/icons/clock.png"
                      alt="Days"
                      className={style.scheduleImg}
                    />
                  </div>
                  <p>Days: Monday &amp; Wednesday</p>
                </div>

                {/* Time */}
                <div className="col-12 col-md-4 d-flex flex-column align-items-center scroll-section">
                  <div className={style.scheduleIcon}>
                    <img
                      src="../assets/images/icons/calendar.png"
                      alt="Time"
                      className={style.scheduleImg}
                    />
                  </div>
                  <p>Time: 6:20 PM – 8:00 PM (Jordan Time)</p>
                </div>

                {/* Format */}
                <div className="col-12 col-md-4 d-flex flex-column align-items-center scroll-section">
                  <div className={style.scheduleIcon}>
                    <img
                      src="/assets/images/icons/bigworld.png"
                      alt="Online format"
                      className={style.scheduleImg}
                    />
                  </div>
                  <p>Format: Online Interactive Sessions</p>
                </div>
              </div>
            </div>
          </section>

          {/* Who Can Join */}
          <section className={`${style.whoCanJoin} scroll-section`}>
            <div className="row justify-content-center mx-auto align-items-center">
              <div className="col-12 col-lg-5 mb-4 mb-lg-0">
                <div className={style.imageWrapper}>
                  <img
                    className="img-fluid"
                    src="../assets/images/others/arabicafe2.png"
                    alt="Students studying Arabic"
                  />
                </div>
              </div>
              <div className="col-12 col-lg-5 d-flex flex-column justify-content-center">
                <h2 className={style.whoTitle}>Who Can Join?</h2>
                <hr className={style.whoLine} />
                <p>
                  Online ArabiCafe is best suited for learners who already have
                  a foundation in Arabic and want consistent speaking practice
                  in an engaging and interactive environment.
                </p>
                <p className={style.minLabel}>Minimum requirement:</p>
                <p>
                  Students should have <strong>at least a B1 level</strong> in
                  Arabic or an equivalent conversational ability in order to
                  participate effectively in the sessions.
                </p>
                <a
                  className={`text-decoration-none text-white ${style.signUpBtn}`}
                  href="https://docs.google.com/forms/d/e/1FAIpQLScKQTLvV48wnnLa-MG4VYBXHLXQS-5aP7IrO-8_InTxnRqGIQ/viewform"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sign Up
                </a>
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

export default ArabiCafe;
