import { useEffect, Fragment, useState } from "react";
import { Link } from "react-router";
import HomeNavBar from "../../components/homenavbar/homenavbar";
import Testimonials from "../../components/testimonials/testimonials";
import Footer from "../../components/footer/footer";
import ForeignCircles from "../../components/foreigncircles/foreigncircles";
import Courses from "../../components/courses/courses";
import TermsModal from "../../components/terms/terms";
import { useScrollAnimation } from "../../../hooks/scrollAnimations";
import { showLoader, hideLoader } from "../../../hooks/loader";
import "bootstrap";
import "../../style/animation.scss";
import style from "./home.module.scss";
import FloatingActionButton from "../../components/floatingbutton/floatingactionbutton";
import FloatingActionButtonInstitute from "../../components/floatingbutton/floatingactionbuttoninstitute";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  const [showTerms, setShowTerms] = useState<boolean>(false);

  useEffect(() => {
    showLoader();

    // Get all images on page
    const images = document.querySelectorAll("img");
    let loadedImages = 0;
    const checkAllLoaded = () => {
      loadedImages++;
      if (loadedImages >= images.length) {
        hideLoader();
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        checkAllLoaded();
      } else {
        img.addEventListener("load", checkAllLoaded);
        img.addEventListener("error", checkAllLoaded); // Hide even if error
      }
    });

    // Fallback
    const timeout = setTimeout(() => hideLoader(), 5000);

    return () => clearTimeout(timeout);
  }, []);

  const handleAccept = (): void => {
    localStorage.setItem("termsAccepted", "true");
    setShowTerms(false);
  };

  const handleDecline = (): void => {
    // ✅ Redirect to google or an external page
    window.location.href = "https://share.google/yvEpqvOtakxQUomLO";
  };

  useEffect(() => {
    document.title = "Deewan Institute | Home";
  }, []);

  useScrollAnimation();

  return (
    <Fragment>
      <FloatingActionButton />
      <FloatingActionButtonInstitute />

      {showTerms && (
        <TermsModal onAccept={handleAccept} onDecline={handleDecline} />
      )}

      {/* Navigation Bar */}
      <HomeNavBar />

      <section className={style.myCarousel} aria-label="Deewan Institute introduction">
        <div id={style.carouselItem1}>
          <div className="container-fluid d-flex align-items-end h-100">
            <div className="row w-100" id={style.firstRow}>
              <div
                className="col-lg-6 text-center d-flex flex-column align-items-center scroll-section slide-in-left"
                id={style.logo}
              >
                <img
                  src={"/assets/images/logos/nobgLogo.webp"}
                  style={{ width: "70%" }}
                  alt="Deewan Institute"
                />
              </div>
              <div className="col-lg-6 d-flex flex-column align-items-start justify-content-center">
                <div
                  className="d-flex scroll-section slide-in-right"
                  id={style.firstContainer}
                >
                  <h2 className={`text-white ${style.h2}`}>
                    {t("pages.home.home.text_native_arabic_global_echoes_ignite_cultures_in_amm")}
                  </h2>
                  <p className={style.para}>
                    {t("pages.home.home.text_experience_the_authentic_rhythm_of_arabic_language")}
                  </p>
                  <Link
                    className="btn rounded-pill text-center"
                    id={style.a}
                    to="/about"
                  >
                    {t("pages.home.home.text_learn_more")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={style.instituteTour} aria-labelledby="institute-tour-title">
        <div className={style.tourContent}>
          <div className={style.tourIntro}>
            <p>Discover Deewan Institute</p>
            <h2 id="institute-tour-title">Take a tour inside Deewan Institute</h2>
            <span>See our welcoming learning spaces and get a feel for life at Deewan.</span>
          </div>
          <div className={style.tourVideoFrame}>
            <video
              controls
              playsInline
              preload="metadata"
              src="https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/Walkthrough%20Video%2Fvideo.mp4?alt=media&token=993e2777-eaf5-4b23-9722-7a991135f255"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* <!-- About Us --> */}
      <section id={style.aboutUs}>
        <div
          className="row featurette align-items-center justify-content-center mx-auto"
          id={style.row}
        >
          <div className="col-lg-6 col-lg-8 col-xl-6 col-xl-4 order-md-2 pr-2 d-flex flex-column gap-2">
            <h2
              className={`${style.featuretteHeading} scroll-section slide-in-left`}
            >
              {t("pages.home.home.text_about_us")}</h2>
            <p className="lead scroll-section slide-in-left" id={style.para}>
              {t("pages.home.home.text_deewan_institute_inspired_by_the_arabic_word_deewa")}</p>
            <Link
              className="button rounded-pill text-decoration-none scroll-section slide-in-left"
              id={style.button}
              to="/arabic-courses"
            >
              {t("pages.home.home.text_explore_our_courses")}</Link>
          </div>
          <div className="col-lg-5 col-lg-8 col-xl-6 col-xl-4  order-md-1 d-flex mt-2">
            <img
              className="featurette-image img-fluid mx-auto scroll-section slide-in-right"
              src={"/assets/images/others/location.webp"}
            />
          </div>
        </div>
      </section>

      {/*Habibi Section*/}
      <section id={style.habibiSection}>
        <div
          className="row featurette align-items-center justify-content-center mx-auto"
          id={style.row}
        >
          {/* Text column — order-md-1 so it sits LEFT on desktop */}
          <div className="col-lg-6 col-lg-8 col-xl-6 col-xl-6 order-md-1 pr-2 d-flex flex-column gap-2">
            <h2
              className={`${style.featuretteHeading} text-white scroll-section slide-in-right`}
            >
              {t("pages.home.home.text_the_habibi_challenge_is_live")}</h2>
            <p
              className="lead scroll-section slide-in-right text-white"
              id={style.para}
            >
              {t("pages.home.home.text_find_habibi_is_cool_in_your_city_and_get_rewarded")}<br></br>{t("pages.home.home.text_take_a_selfie_with_the_sticker_10_discount")}<br></br>{t("pages.home.home.text_place_10_stickers_in_your_city_10_discount")}<br></br>
              {t("pages.home.home.text_join_the_movement_and_help_spread_arabic_world_wid")}<br></br>
            </p>
            <a
              className="button rounded-pill text-decoration-none scroll-section slide-in-right"
              id={style.whiteButton}
              href="mailto:arabic@deewaninstitute.com?subject=Habibi%20Selfie"
            >
              {t("pages.home.home.text_email_us_your_selfie")}</a>
          </div>

          {/* Image slider column — order-md-2 so it sits RIGHT on desktop */}
          <div className="col-lg-4 col-xl-4 col-xl-6 col-xl-5 order-md-2 d-flex justify-content-center">
            <div
              id="habibCarousel"
              className={`carousel slide w-100 ${style.habibCarousel}`}
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#habibCarousel"
                  data-bs-slide-to="0"
                  className="active"
                ></button>
                <button
                  type="button"
                  data-bs-target="#habibCarousel"
                  data-bs-slide-to="1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#habibCarousel"
                  data-bs-slide-to="2"
                ></button>
              </div>

              <div className="carousel-inner rounded-3">
                <div className="carousel-item active">
                  <img
                    src={"../assets/images/others/habibi1.webp"}
                    className="d-block w-100 featurette-image img-fluid"
                    alt="Habibi slide 1"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={"../assets/images/others/habibi2.webp"}
                    className="d-block w-100 featurette-image img-fluid"
                    alt="Habibi slide 2"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={"../assets/images/others/habibi3.webp"}
                    className="d-block w-100 featurette-image img-fluid"
                    alt="Habibi slide 3"
                  />
                </div>
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#habibCarousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#habibCarousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Courses Section --> */}
      <Courses />

      {/* <!-- Foreign Section --> */}
      <ForeignCircles />

      {/* <!-- Testimonials Section --> */}
      <Testimonials />

      {/* <!-- Contact Us Section --> */}
      <section className={`scroll-section py-3 ${style.contact}`}>
        <div className="row mx-5 justify-content-center">
          <div className="col-8 d-flex flex-column flex-end">
            <h1>{t("pages.home.home.text_join_us_today_and_start_your_language_journey")}</h1>
          </div>
          <div className="col-2 d-flex flex-column justify-items-center justify-content-center">
            <a
              href="https://docs.google.com/forms/d/1Z2pxzOqxGTh8X0BePq_iy12bMVq_w5xW-gOD4SLnu2s/viewform?edit_requested=true"
              className="bg-white text-black text-center"
              target="_blank"
            >
              {t("pages.home.home.text_book_with_us")}</a>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </Fragment>
  );
}
export default Home;
