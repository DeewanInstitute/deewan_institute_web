import { Fragment, useEffect } from "react";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Title from "../../components/title/title";
import ShadowBanner from "../../components/shadowbanner/shadowbanner";
import Platform from "../../components/platform/platform";
import BottomBanner from "../../components/bottombanner/bottombanner";
import { useScrollAnimation } from "../../../hooks/scrollAnimations";
import style from "./arabic.module.scss";
import "../../style/animation.scss";
import "bootstrap";
import FloatingActionButton from "../../components/floatingbutton/floatingactionbutton";
import FloatingActionButtonInstitute from "../../components/floatingbutton/floatingactionbuttoninstitute";
import { useTranslation } from "react-i18next";

function ArabiTalk() {
    const { t } = useTranslation();
  useEffect(() => {
    document.title = "Arabi Talk";
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
          title: "ArabiTalk",
          backgroundImg: "/assets/images/banner/aya.JPG",
          rgbColor: "22, 117, 166",
        }}
      />
      <div
        className={style.arabiTalk}
        style={
          {
            "--background-image": `url('/assets/images/background/arabiTalkBG.png')`,
          } as React.CSSProperties
        }
      >
        <main>
          {/* Title */}
          <Title
            data={{
              subtitle: "Communicate in Arabic with Ease",
              color: "#0C608B",
            }}
          />
          {/* <!-- About Section --> */}
          <section className={`${style.info} py-3 my-5 scroll-section`}>
            <div className="row justify-content-center mx-auto">
              <div className="col-lg-5 d-flex flex-column align-items-start justify-content-center">
                <h5 className="featurette-heading mb-2">{t("pages.arabiccourses.arabiTalk.text_arabitalk")}</h5>
                <h1 className="featurette-heading my-3">{t("pages.arabiccourses.arabiTalk.text_what_is_it")}</h1>
                <p className="lead" id={style.para}>
                  {t("pages.arabiccourses.arabiTalk.text_are_you_ready_to_speak_arabic_fluently_without_the")}</p>
              </div>
              {/* <!-- The Building Image --> */}
              <div className="col-lg-6 d-flex flex-column align-items-start justify-content-center">
                <img
                  className="featurette-image img-fluid mx-auto"
                  data-src="holder.js/500x500/auto"
                  alt="500x500"
                  src={"../assets/images/others/arabitalk2.png"}
                  data-holder-rendered="true"
                />
              </div>
            </div>
          </section>
          {/* Platforms */}
          <Platform data={{ color: "#0D5071" }} />
          {/* Sessions */}
          <section className={style.sessions}>
            <div className={`${style.subTitle} my-5`}>
              <h1 className="py-2 scroll-section slide-in-right">{t("pages.arabiccourses.arabiTalk.text_sessions")}</h1>
            </div>

            <div className="row justify-content-center">
              {/* Card 1 */}
              <div className="col-12 col-md-6 col-lg-5 mb-5 scroll-section slide-in-left">
                <div className={`card ${style.card}`} id={style.card}>
                  <h1 className={style.blackText}>{t("pages.arabiccourses.arabiTalk.text_30_mins")}</h1>
                  <hr className="my-2" />
                  <h1 className={style.yellowText}>{t("pages.arabiccourses.arabiTalk.text_6_jd")}</h1>
                  <hr className="my-2" />
                  <div className="my-3">
                    <h4>{t("pages.arabiccourses.arabiTalk.text_flexible_schedule")}</h4>
                    <h4>{t("pages.arabiccourses.arabiTalk.text_11_00am_6_00pm")}</h4>
                  </div>
                  <a
                    className={`text-decoration-none text-white ${style.cardBtn}`}
                    href="https://docs.google.com/forms/..."
                    target="_blank"
                  >
                    {t("pages.arabiccourses.arabiTalk.text_book_a_session")}</a>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-12 col-md-6 col-lg-5 mb-5 scroll-section slide-in-left">
                <div className={`card ${style.card}`} id={style.card}>
                  <h1 className={style.blackText}>{t("pages.arabiccourses.arabiTalk.text_45_mins")}</h1>
                  <hr className="my-2" />
                  <h1 className={style.yellowText}>{t("pages.arabiccourses.arabiTalk.text_9_jd")}</h1>
                  <hr className="my-2" />
                  <div className="my-3">
                    <h4>{t("pages.arabiccourses.arabiTalk.text_flexible_schedule")}</h4>
                    <h4>{t("pages.arabiccourses.arabiTalk.text_11_00am_6_00pm")}</h4>
                  </div>
                  <a
                    className={`text-decoration-none text-white ${style.cardBtn}`}
                    href="https://docs.google.com/forms/..."
                    target="_blank"
                  >
                    {t("pages.arabiccourses.arabiTalk.text_book_a_session")}</a>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom Banner */}
          <BottomBanner
            data={{
              mainText: "Unlock Arabic Conversations with ArabiTalk",
              buttonText: "Sign Up!",
              primaryColor: "black",
              backgroundImg: "../assets/images/banner/arabiTalkBBG.png",
            }}
          />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </Fragment>
  );
}

export default ArabiTalk;
