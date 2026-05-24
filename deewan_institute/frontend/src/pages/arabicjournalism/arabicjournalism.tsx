import { Fragment, useEffect } from "react";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import ShadowBanner from "../../components/shadowbanner/shadowbanner";
import { useScrollAnimation } from "../../../hooks/scrollAnimations";
import style from "./arabicjournalism.module.scss";
import "../../style/animation.scss";
import "bootstrap";
import FloatingActionButton from "../../components/floatingbutton/floatingactionbutton";
import FloatingActionButtonInstitute from "../../components/floatingbutton/floatingactionbuttoninstitute";

function ArabicJournalism() {
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
          backgroundImg: "/assets/images/banner/journalism-hero.png",
          rgbColor: "171, 111, 15, 0.8",
          titleBgColor: "171, 111, 15",
        }}
      />

      <div className={style.arabicJournalism}>
        <main>

          {/* Hero Title */}
          <section className={`${style.hero} scroll-section`}>
            <p className={style.subtitle}>Arabic Journalism</p>
            <h1>Explore Media, Reporting, and Storytelling in Arabic</h1>
            <hr className={style.divider} />
          </section>

          {/* Full-width image */}
          <section className={`${style.imageSection} scroll-section`}>
            <img
              src="../assets/images/others/journalism-banner.png"
              alt="Arabic newspaper"
              className={style.fullImage}
            />
          </section>

          {/* What We Offer */}
          <section className={`${style.offer} scroll-section`}>
            <h2>What We Offer</h2>
            <hr className={style.offerDivider} />
            <p>
              Develop your Arabic language skills through the world of media,
              reporting, and storytelling. Our Arabic Journalism course introduces
              students to the foundations of journalistic writing, news reporting,
              and media communication in Arabic.
            </p>
            <p>
              Designed for advanced learners and aspiring media professionals, the
              course explores key aspects of journalism including news gathering,
              interviewing, feature writing, editing, and ethical reporting
              practices within the Arab media landscape. Students will engage with
              authentic Arabic media sources while building confidence in reading,
              writing, and discussing current events in Arabic.
            </p>
            <p>
              Through practical exercises, writing assignments, and guided
              instruction from experienced teachers, participants will strengthen
              both their linguistic abilities and analytical thinking skills.
              Whether you are pursuing a career in journalism, media studies,
              international relations, or simply seeking a deeper understanding of
              Arab media and society, this course offers an immersive and engaging
              learning experience.
            </p>
          </section>

        </main>
      </div>

      {/* Footer */}
      <Footer />
    </Fragment>
  );
}

export default ArabicJournalism;