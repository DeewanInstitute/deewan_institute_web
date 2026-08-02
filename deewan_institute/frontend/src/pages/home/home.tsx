import { useEffect, Fragment, useRef, useState } from "react";
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
import { Carousel } from "bootstrap";

function Home() {
  const { t } = useTranslation();
  const [showTerms, setShowTerms] = useState<boolean>(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

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

  useEffect(() => {
    const carouselElement = carouselRef.current;
    const videoElement = heroVideoRef.current;
    if (!carouselElement || !videoElement) return;

    const carousel = Carousel.getOrCreateInstance(carouselElement);

    const handleSlideChange = (event: Event) => {
      const nextSlide = (event as Event & { to: number }).to;

      if (nextSlide === 1) {
        carousel.pause();
        void videoElement.play().catch(() => {
          // Playback can still require user interaction in restrictive browsers.
        });
        return;
      }

      videoElement.pause();
      carousel.cycle();
    };

    const handleVideoPlay = () => carousel.pause();

    carouselElement.addEventListener("slid.bs.carousel", handleSlideChange);
    videoElement.addEventListener("play", handleVideoPlay);

    return () => {
      carouselElement.removeEventListener("slid.bs.carousel", handleSlideChange);
      videoElement.removeEventListener("play", handleVideoPlay);
      videoElement.pause();
    };
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

      {/* <!-- Carousel --> */}
      <div
        id="myCarousel"
        ref={carouselRef}
        className={`carousel slide ${style.myCarousel}`}
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        {/* <!-- Indicators/dots --> */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
          ></button>
        </div>

        {/* <!-- The slideshow/carousel --> */}
        <div className="carousel-inner h-100">
          {/* <!-- First Slide --> */}
          <div className="carousel-item active" id={style.carouselItem1}>
            <div className="container-fluid d-flex align-items-end h-100">
              <div className="row w-100" id={style.firstRow}>
                <div
                  className="col-lg-6 text-center d-flex flex-column align-items-center scroll-section slide-in-left"
                  id={style.logo}
                >
                  <img
                    src={"/assets/images/logos/nobgLogo.png"}
                    style={{ width: "70%" }}
                  />
                </div>
                <div className="col-lg-6 d-flex flex-column align-items-start justify-content-center">
                  <div
                    className="d-flex scroll-section slide-in-right"
                    id={style.firstContainer}
                  >
                    <h2 className={`text-white ${style.h2}`}>
                      {t("pages.home.home.text_native_arabic_global_echoes_ignite_cultures_in_amm")}</h2>
                    <p className={style.para}>
                      {t("pages.home.home.text_experience_the_authentic_rhythm_of_arabic_language")}</p>
                    <Link
                      className="btn rounded-pill text-center"
                      id={style.a}
                      to="/about"
                    >
                      {t("pages.home.home.text_learn_more")}</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Second Slide --> */}
          <div
            className="carousel-item"
            id={style.carouselItem2}
            data-bs-interval="false"
          >
            <video
              ref={heroVideoRef}
              className={style.heroVideo}
              src="https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/Walkthrough%20Video%2Fvideo.mp4?alt=media&token=993e2777-eaf5-4b23-9722-7a991135f255"
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>
        </div>

        {/* <!-- Left and right controls/icons --> */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

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
              src={"/assets/images/others/location.png"}
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
                    src={"../assets/images/others/habibi1.jpg"}
                    className="d-block w-100 featurette-image img-fluid"
                    alt="Habibi slide 1"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={"../assets/images/others/habibi2.jpg"}
                    className="d-block w-100 featurette-image img-fluid"
                    alt="Habibi slide 2"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={"../assets/images/others/habibi3.jpg"}
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
