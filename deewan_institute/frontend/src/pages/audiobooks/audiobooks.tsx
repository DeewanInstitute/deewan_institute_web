import { Fragment, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import FloatingActionButton from "../../components/floatingbutton/floatingactionbutton";
import FloatingActionButtonInstitute from "../../components/floatingbutton/floatingactionbuttoninstitute";
import { useScrollAnimation } from "../../../hooks/scrollAnimations";
import styles from "./audiobooks.module.scss";
import "../../style/animation.scss";
import { fushaBook, ammiyehCollection, mainBooks } from "../../../data";

declare const Swiper: any;

// Reuse the existing catalog data, only swapping in the new poster-style
// cover art prepared for this page where we have it.
const fushaAudioBook = {
  ...fushaBook,
  image: "../assets/images/books/poster/msa.webp",
};

const idiomsAudioBook = {
  ...mainBooks.find((book) => book.id === "main-book-everyday-idioms")!,
  image: "../assets/images/books/poster/idioms.webp",
};

// Not in the catalog yet — audio-only release, no cover art delivered so far.
const culinaryAudioBook = {
  id: "audio-culinary-guide",
  image: "../assets/images/books/poster/cookbook.webp",
};

function ListenArrowIcon() {
  return (
    <svg
      className={styles.listenArrow}
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      aria-hidden="true"
    >
      <path d="M0 0L14 8L0 16V0Z" fill="currentColor" />
    </svg>
  );
}

function AudioBooks() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  useScrollAnimation();

  useEffect(() => {
    document.title = "Audio Learning Library";
  }, []);

  const ammiyehSwiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof Swiper === "undefined") return;

    const ammiyehSwiper = new Swiper(ammiyehSwiperRef.current, {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      autoplay: { delay: 4000, disableOnInteraction: true },
      speed: 900,
      navigation: {
        nextEl: ammiyehSwiperRef.current?.querySelector(".swiper-button-next"),
        prevEl: ammiyehSwiperRef.current?.querySelector(".swiper-button-prev"),
      },
      pagination: {
        el: ammiyehSwiperRef.current?.querySelector(".swiper-pagination"),
        clickable: true,
      },
      breakpoints: {
        576: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
      },
    });

    return () => ammiyehSwiper.destroy(true, true);
  }, []);

  const goToBook = (id: string) => navigate(`/audiobooks/${id}`);

  return (
    <Fragment>
      <NavBar />
      <FloatingActionButton />
      <FloatingActionButtonInstitute />

      {/* Hero */}
      <section className={`${styles.hero} scroll-section`}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1>
              <span className={styles.heroWhite}>
                {t("pages.audiobooks.audiobooks.text_hero_word_audio")}{" "}
              </span>
              <span className={styles.heroAccent}>
                {t("pages.audiobooks.audiobooks.text_hero_word_learning")}{" "}
              </span>
              <span className={styles.heroWhite}>
                {t("pages.audiobooks.audiobooks.text_hero_word_library")}
              </span>
            </h1>
            <p>{t("pages.audiobooks.audiobooks.text_hero_subtitle")}</p>
          </div>
        </div>

        <div className={styles.heroShapes} aria-hidden="true">
          <div className={styles.circleBack}>
            <img src="../assets/images/shapes/brown-circle.webp" alt="" />
            <img
              src="../assets/images/shapes/audio-wave.webp"
              alt=""
              className={styles.waveImg}
            />
          </div>
          <div className={styles.circleFront}>
            <img src="../assets/images/shapes/light-brown-circle.webp" alt="" />
            <img
              src="../assets/images/shapes/audio-wave.webp"
              alt=""
              className={styles.waveImg}
            />
          </div>
          <div className={styles.circleBottom}>
            <img src="../assets/images/shapes/brown-circle.webp" alt=""/>
            <img
            src="../assets/images/shapes/audio-wave.webp"
            alt=""
            className={styles.waveImg}
            />
          </div>
        </div>
      </section>

      {/* Fusha Collection */}
      <section className={`${styles.section} scroll-section`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>
            {t("pages.audiobooks.audiobooks.text_fusha_collection")}
          </h2>

          <div className={`row align-items-center g-4 g-lg-5 ${styles.featureRow}`}>
            <div className="col-12 col-lg-5">
              <img
                className={styles.featureCover}
                src={fushaAudioBook.image}
                alt={t(`content.books.fusha.${fushaAudioBook.id}.title`)}
              />
            </div>
            <div className="col-12 col-lg-7">
              <h3 className={styles.featureTitle}>
                {t(`content.books.fusha.${fushaAudioBook.id}.title`)}
              </h3>
              <p className={styles.featureDescription}>
                {t(`content.books.fusha.${fushaAudioBook.id}.description`)}
              </p>
              <button
                className={styles.listenBtnLg}
                onClick={() => goToBook(fushaAudioBook.id)}
              >
                {t("pages.audiobooks.audiobooks.text_listen_now")}
                <ListenArrowIcon />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ammiyeh Collection */}
      <section className={`${styles.section} ${styles.ammiyehSection} scroll-section`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>
            {t("pages.audiobooks.audiobooks.text_ammiyeh_collection")}
          </h2>

          <div className={styles.ammiyehSwiperWrap}>
            <div ref={ammiyehSwiperRef} className="swiper ammiyehAudioSwiper">
              <div className="swiper-wrapper">
                {ammiyehCollection.map((book) => (
                  <div key={book.id} className="swiper-slide">
                    <div className={styles.ammiyehCard}>
                      <img
                        className={styles.ammiyehCover}
                        src={book.image}
                        alt={t(`content.books.ammiyeh.${book.id}.title`)}
                        onClick={() => goToBook(book.id)}
                      />
                      <h3 className={styles.ammiyehTitle}>
                        {t(`content.books.ammiyeh.${book.id}.title`)}
                      </h3>
                      <p
                        className={styles.ammiyehSubtitle}
                        aria-hidden={!book.subtitle}
                      >
                        {book.subtitle
                          ? t(`content.books.ammiyeh.${book.id}.subtitle`)
                          : " "}
                      </p>
                      <button
                        className={styles.listenBtnSm}
                        onClick={() => goToBook(book.id)}
                      >
                        {t("pages.audiobooks.audiobooks.text_listen_now")}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="swiper-button-next" />
              <div className="swiper-button-prev" />
              <div className="swiper-pagination" />
            </div>
          </div>
        </div>
      </section>

      {/* Speak Like a Local: Arabic Idioms */}
      <section className={`${styles.section} scroll-section`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>
            {t("pages.audiobooks.audiobooks.text_speak_like_a_local_arabic_idioms")}
          </h2>

          <div className={`row align-items-center g-4 g-lg-5 ${styles.featureRow}`}>
            <div className="col-12 col-lg-5">
              <img
                className={styles.featureCover}
                src={idiomsAudioBook.image}
                alt={t(`content.books.main.${idiomsAudioBook.id}.title`)}
              />
            </div>
            <div className="col-12 col-lg-7">
              <h3 className={styles.featureTitle}>
                {t(`content.books.main.${idiomsAudioBook.id}.title`)}
              </h3>
              <p className={styles.featureDescription}>
                {t(`content.books.main.${idiomsAudioBook.id}.description`)}
              </p>
              <button
                className={styles.listenBtnLg}
                onClick={() => goToBook(idiomsAudioBook.id)}
              >
                {t("pages.audiobooks.audiobooks.text_listen_now")}
                <ListenArrowIcon />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Learn Arabic Through Food */}
      <section className={`${styles.section} scroll-section`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>
            {t("pages.audiobooks.audiobooks.text_learn_arabic_through_food")}
          </h2>

          <div className={`row align-items-center g-4 g-lg-5 ${styles.featureRow}`}>
            <div className="col-12 col-lg-7">
              <h3 className={styles.featureTitle}>
                {t("pages.audiobooks.audiobooks.text_culinary_guide_title")}
              </h3>
              <p className={styles.featureDescription}>
                {t("pages.audiobooks.audiobooks.text_culinary_guide_description")}
              </p>
              <button
                className={styles.listenBtnLg}
                onClick={() => goToBook(culinaryAudioBook.id)}
              >
                {t("pages.audiobooks.audiobooks.text_listen_now")}
                <ListenArrowIcon />
              </button>
            </div>
            <div className="col-12 col-lg-5">
              {culinaryAudioBook.image ? (
                <img
                  className={styles.featureCoverPortrait}
                  src={culinaryAudioBook.image}
                  alt={t("pages.audiobooks.audiobooks.text_culinary_guide_title")}
                />
              ) : (
                <div className={styles.coverPlaceholder}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5v-17Z"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinejoin="round"
                    />
                    <path d="M4 19a2.5 2.5 0 0 1 2.5-2.5H20" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                  <span>{t("pages.audiobooks.audiobooks.text_cover_coming_soon")}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Fragment>
  );
}

export default AudioBooks;
