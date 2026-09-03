import { Fragment, useEffect } from "react";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import TeamSlider from "../../components/teamslider/teamslider";
import PartnershipSlider from "../../components/partnershipslider/partnershipslider";
import Divider from "../../components/divider/divider";
import { useScrollAnimation } from "../../../hooks/scrollAnimations";
import "../../style/animation.scss";
import "bootstrap";
import style from "./about.module.scss";
import YouTubeSlider from "../../components/youtubeslider/youtubeslider";
import FloatingActionButton from "../../components/floatingbutton/floatingactionbutton";
import FloatingActionButtonInstitute from "../../components/floatingbutton/floatingactionbuttoninstitute";
import { useTranslation } from "react-i18next";

function About() {
    const { t } = useTranslation();
  useEffect(() => {
    document.title = "About Us";
  }, []);

  useScrollAnimation();

  return (
    <Fragment>
      <NavBar />
      <FloatingActionButton />
      <FloatingActionButtonInstitute />
      <main className={`${style.aboutpage}`}>
        {/* Banner Image */}
        <section
          className={`${style.banner} d-flex align-items-center justify-content-center`}
        >
          <div className="px-4 text-center d-flex flex-column align-items-center justify-content-center">
            <h1 className="display-5 fw-bold text-white my-4">
              {t("pages.about.about.text_about_deewan_institute")}</h1>
            <div className="col-lg-10 mx-auto">
              <p className={`lead mb-4 text-center text-white ${style.para}`}>
                {t("pages.about.about.text_deewan_institute_your_premier_gateway_to_mastering")}</p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className={`${style.about} py-3 my-5 scroll-section`}>
          <div className="row justify-content-center" id={style.row}>
            <div className="col-md-4 d-flex flex-column align-items-start justify-content-center">
              <h5 className={`${style.h5} featurette-heading mb-2`}>
                {t("pages.about.about.text_who_are_we")}</h5>
              <h1 className={`${style.h1} featurette-heading my-3`}>
                {t("pages.about.about.text_deewan_institute_for_languages_and_cultural_studie")}</h1>
              <p className={`${style.para} lead`}>
                {t("pages.about.about.text_at_deewan_institute_we_believe_that_language_is_th")}</p>
            </div>
            <div className="col-md-5 d-flex flex-column align-items-start justify-content-center">
              <img
                id={style.images}
                className="featurette-image img-fluid mx-auto"
                src="/assets/images/others/aboutImage1.webp"
                alt={t("pages.about.about.alt_deewan_institute_building")}
                style={{ width: "600px", height: "700px" }}
              />
            </div>
          </div>
        </section>

        {/* Partnership Section */}
        <section
          className={`${style.partnerships} d-flex flex-column align-items-center justify-content-center`}
        >
          <div
            className={`${style.title} title mt-5 d-flex flex-column align-items-center scroll-section`}
          >
            <span>{t("pages.about.about.text_partnerships")}</span>
            <hr className={`${style.featuretteDivider}`} />
          </div>
          <p className={`${style.para} lead text-center my-4 scroll-section`}>
            {t("pages.about.about.text_deewan_institute_proudly_collaborates_with_leading")}</p>
          <PartnershipSlider />
        </section>

        {/* Divider */}
        <Divider />

        {/* Values Section */}
        <section className={`${style.values} scroll-section`}>
          <div className={`${style.title} mt-5 mx-auto align-items-center`}>
            <span>{t("pages.about.about.text_our_values")}</span>
          </div>
          <div id={style.row} className="row my-5 py-5">
            <div
              className="col-lg-4 col-md-4 d-flex flex-column align-items-center gap-4"
              id={style.value}
            >
              <img
                id={style.image}
                src="/assets/images/icons/firstValue.webp"
                alt={t("pages.about.about.alt_community_and_inclusivity")}
              />
              <h4 className={`${style.heading} text-center lh-base`}>
                {t("pages.about.about.text_community_and")}<br /> {t("pages.about.about.text_inclusivity")}</h4>
            </div>
            <div
              className="col-lg-4 col-md-4 d-flex flex-column align-items-center gap-4"
              id={style.value}
            >
              <img
                id={style.image}
                src="/assets/images/icons/secondValue.webp"
                alt={t("pages.about.about.alt_excellence_in_education")}
              />
              <h4 className={`${style.heading} text-center lh-base`}>
                {t("pages.about.about.text_excellence_in")}<br /> {t("pages.about.about.text_education")}</h4>
            </div>
            <div
              className="col-lg-4 col-md-4 d-flex flex-column align-items-center gap-4"
              id={style.value}
            >
              <img
                id={style.image}
                src="/assets/images/icons/thirdValue.webp"
                alt={t("pages.about.about.alt_innovation_and_creativity")}
              />
              <h4 className={`${style.heading} text-center lh-base`}>
                {t("pages.about.about.text_innovation_and")}<br /> {t("pages.about.about.text_creativity")}</h4>
            </div>
          </div>
        </section>

        {/* Divider */}
        <Divider />

        {/* Team Section */}
        <section className={`${style.team} scroll-section`}>
          <div className={`${style.title} mt-5 mx-auto align-items-center`}>
            <span>{t("pages.about.about.text_meet_our_team")}</span>
          </div>
          <TeamSlider />
        </section>

        {/* Approach Section */}
        <section className={`${style.approach} my-5 scroll-section`}>
          <div className="row justify-content-center" id={style.row}>
            <div className="col-md-5 d-flex flex-column align-items-start justify-content-center">
              <img
                className="featurette-image img-fluid mx-auto"
                src="/assets/images/others/aboutImage3.webp"
                alt={t("pages.about.about.alt_teaching_approach")}
                style={{ width: "500px", height: "750px" }}
              />
            </div>
            <div className="col-md-4 d-flex flex-column align-items-start justify-content-center">
              <h1
                className={`${style.featuretteHeading} featurette-heading my-3`}
              >
                {t("pages.about.about.text_our_teaching_approach")}</h1>
              <p className={`${style.para} lead`}>
                {t("pages.about.about.text_at_deewan_institute_we_specialize_in_teaching_arab")}</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <YouTubeSlider />

        {/* Social Media Section */}
        <section
          className={`${style.socialMedia} d-flex flex-column align-items-center justify-content-center`}
        >
          <div
            className={`${style.title} mt-5 d-flex flex-column align-items-center scroll-section`}
          >
            <span>{t("pages.about.about.text_our_social_medias")}</span>
            <hr className={`${style.featuretteDivider}`} />
          </div>
          <p className={`${style.para} lead text-center my-4 scroll-section`}>
            {t("pages.about.about.text_follow_deewan_institute_on_social_media_to_stay_up")}</p>
          <div className={`${style.cardsRow} row scroll-section`}>
  {[
  {
    id: "facebook",
    embedUrl: "https://www.facebook.com/plugins/post.php?href=%2Freel%2F4492868834279349%2F&&show_text=true",
    icons: ["facebook"]
  },
  {
    id: "linkedin",
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:share:7459936498294091776?",
    icons: ["linkedin"]
  },
  {
    id: "instagram",
    embedUrl: "https://www.instagram.com/p/DYUpYdLjRwa/embed",
    icons: ["instagram"]
  }
].map((card) => (
  <div key={card.id} className={`col-md-4 d-flex justify-content-center`}>
    <div className={style.socialCard}>
      <iframe
        src={card.embedUrl}
        className={style.cardImage}
        scrolling="no"
        allowTransparency
        allow="encrypted-media"
      />
        <div className={style.cardIcons}>
                    <a href="https://www.facebook.com/profile.php?id=61579964781468" aria-label={t("pages.about.about.aria_label_facebook")}>
                      <img
                        src="/assets/images/icons/facebook.webp"
                        alt={t("pages.about.about.aria_label_facebook")}
                      />
                    </a>
                    <a href="https://www.linkedin.com/company/deewaninstitute/posts/?feedView=all" aria-label={t("pages.about.about.aria_label_linkedin")}>
                      <img
                        src="/assets/images/icons/linkedin.webp"
                        alt={t("pages.about.about.aria_label_linkedin")}
                      />
                    </a>
                    <a href="https://www.instagram.com/deewan_arabic_institute/" aria-label={t("pages.about.about.aria_label_instagram")}>
                      <img
                        src="/assets/images/icons/instagram.webp"
                        alt={t("pages.about.about.aria_label_instagram")}
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
}

export default About;
