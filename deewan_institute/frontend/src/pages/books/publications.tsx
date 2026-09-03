import { Fragment, useEffect, useRef } from "react";
import styles from "./publications.module.scss";
import "../../style/animation.scss";
import { useScrollAnimation } from "../../../hooks/scrollAnimations";
import { useShop } from "../../context/shopcontext";
import {
  mainBooks,
  ammiyehCollection,
  fushaBook,
  podcastSeasons,
} from "../../../data";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { useNavigate } from "react-router-dom";
import FloatingActionButton from "../../components/floatingbutton/floatingactionbutton";
import FloatingActionButtonInstitute from "../../components/floatingbutton/floatingactionbuttoninstitute";
import { useTranslation } from "react-i18next";

declare const Swiper: any;

// This is the home page for the books 

function StarRating({ rating }: { rating: number }) {
  return (
    <div className={styles.stars} aria-label={`Rating: ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < rating ? styles.starFilled : styles.starEmpty}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function Publications() {
    const { t } = useTranslation();
    useEffect(() => {
    document.title = "Publications";
  }, []);
  const navigate = useNavigate();
  useScrollAnimation();

  //  SHOP CONTEXT HOOKS 
  const { toggleWishlist, isInWishlist, addToCart } = useShop();

  const mainSwiperRef = useRef<HTMLDivElement>(null);
  const ammiyehSwiperRef = useRef<HTMLDivElement>(null);
  const podcastSwiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof Swiper === "undefined") return;

    const mainSwiper = new Swiper(mainSwiperRef.current, {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      autoplay: { delay: 3000, disableOnInteraction: true },
      speed: 1000,
      navigation: {
        nextEl: mainSwiperRef.current?.querySelector(".swiper-button-next"),
        prevEl: mainSwiperRef.current?.querySelector(".swiper-button-prev"),
      },
      breakpoints: {
        1200: { slidesPerView: 2 },
      },
    });

    const ammiyehSwiper = new Swiper(ammiyehSwiperRef.current, {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: { delay: 3000, disableOnInteraction: true },
      speed: 1000,
      navigation: {
        nextEl: ammiyehSwiperRef.current?.querySelector(".swiper-button-next"),
        prevEl: ammiyehSwiperRef.current?.querySelector(".swiper-button-prev"),
      },
      breakpoints: {
        768: { slidesPerView: 1 },
        1024: { slidesPerView: 2 },
      },
    });

    const podcastSwiper = new Swiper(podcastSwiperRef.current, {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: { delay: 3000, disableOnInteraction: true },
      speed: 1000,
      navigation: {
        nextEl: podcastSwiperRef.current?.querySelector(".swiper-button-next"),
        prevEl: podcastSwiperRef.current?.querySelector(".swiper-button-prev"),
      },
      breakpoints: {
        768: { slidesPerView: 1 },
        991: {slidesPerView: 1},
        1024: { slidesPerView: 2 },
      },
    });

    return () => {
      mainSwiper.destroy(true, true);
      ammiyehSwiper.destroy(true, true);
      podcastSwiper.destroy(true, true);
    };
  }, []);

  // Helper to handle wishlist clicks
  const handleWishlistClick = (e: React.MouseEvent, book: any) => {
    e.stopPropagation(); 
    toggleWishlist({
      id: book.id,
      title: book.title,
      subtitle: book.subtitle,
      image: book.image,
      imageAlt: book.imageAlt,
      type: book.type || "book",
      cartLink: book.cartLink,
      listenLink: book.listenLink,
      price: book.price,
    });
  };

  // Helper to handle cart clicks 
  const handleCartClick = (e: React.MouseEvent, book: any) => {
    e.stopPropagation(); 
    addToCart({
      id: book.id,
      title: book.title,
      subtitle: book.subtitle,
      image: book.image,
      imageAlt: book.imageAlt,
      type: book.type || "book",
      cartLink: book.cartLink,
      listenLink: book.listenLink,
      price: book.price ?? 0,
    });
  };

  return (
    <Fragment>
      <NavBar />
      <FloatingActionButton />
      <FloatingActionButtonInstitute />

      {/* ── Banner ── */}
      <section
        className={`${styles.banner} d-flex flex-column py-5 align-items-center justify-content-center scroll-section`}
      >
        <h3>{t("pages.books.publications.text_dive_into_arabic_mastery_with")}</h3>
        <h3>{t("pages.books.publications.text_deewan_s_expert_collection")}</h3>
        <p className="my-3 text-center lh-base">
          {t("pages.books.publications.text_drawing_from_years_of_teaching_msa_and_levantine_a")}</p>
      </section>

      {/* ── Main Books Swiper ── */}
      <section className={`${styles.overview} scroll-section`}>
        <div ref={mainSwiperRef} className="swiper mainBooksSwiper">
          <div className="swiper-wrapper">
            {mainBooks.map((book) => (
              <div key={book.id} className="swiper-slide">
                <div
                  className={styles.bookBox}
                  id={book.id}
                  onClick={() => navigate(`/publications/book/${book.id}`)}
                >
                  <img
                    className={styles.bookImg}
                    src={book.image}
                    alt={book.imageAlt}
                  />

                  <div className={`d-flex flex-column ${styles.bookInfo}`}>
                    <h1>{t(`content.books.main.${book.id}.title`)}</h1>
                    {book.subtitle && (
                      <span className={styles.subtitleBadge}>
                        {t(`content.books.main.${book.id}.subtitle`)}
                      </span>
                    )}
                    <h4>By: {book.author}</h4>

                    {book.hosted && (
                      <p className={styles.hosted}>
                        <span className={styles.hostedLabel}>{t("pages.books.publications.text_available_on")}</span>
                        &nbsp;{book.hosted}
                      </p>
                    )}

                    {book.reviews && book.reviews.length > 0 && (
                      <div className={styles.reviewBlock}>
                        <StarRating rating={book.reviews[0].rating} />
                        <p className={styles.reviewComment}>
                          "{t(`content.books.main.${book.id}.reviews.0.comment`)}"
                        </p>
                        <span className={styles.reviewerName}>
                          — {book.reviews[0].reviewer}
                        </span>
                      </div>
                    )}

                    <p className={styles.bookDescription} style={{ whiteSpace: "pre-line" }}>{t(`content.books.main.${book.id}.description`)}</p>

                    <div
                      className={`d-flex flex-row align-items-center ${styles.bookActions}`}
                    >
                      <a
                        href={book.viewMoreLink}
                        target="_blank"
                        className={styles.viewMoreBtn}
                        rel="noreferrer"
                      >
                        {t("pages.books.publications.text_view_more")}</a>

                      <button
                        onClick={(e) => handleWishlistClick(e, book)}
                        className={`${styles.iconBtn} ${styles.heart} ${isInWishlist(book.id) ? styles.heartActive : ""}`}
                        aria-label={t("pages.books.publications.aria_label_add_to_wishlist")}
                        style={{ border: "none", cursor: "pointer" }}
                      >
                        <img
                          src={
                            isInWishlist(book.id)
                              ? "/assets/images/icons/heart_brown.webp"
                              : "/assets/images/icons/heart.webp"
                          }
                          alt="wishlist"
                          style={{ width: "26px" }}
                        />
                      </button>

                      <button
                        onClick={(e) => handleCartClick(e, book)}
                        className={`${styles.iconBtn} ${styles.cart}`}
                        style={{ border: "none", cursor: "pointer" }}
                      >
                        <img src="/assets/images/icons/cart.webp" alt="cart" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-button-next" />
          <div className="swiper-button-prev" />
        </div>
      </section>

      {/* ── Divider ── */}
      <hr className={`${styles.divider} mx-auto my-2 scroll-section`} />

      {/* ── Ammiyeh Collection ── */}
      <section className={`${styles.ammiyeh} scroll-section`}>
        <div className={styles.sectionTitle}>
          <span>{t("pages.books.publications.text_ammiyeh_collection")}</span>
        </div>
        <div className="row mx-auto">
          <div ref={ammiyehSwiperRef} className="swiper booksSwiper">
            <div className="swiper-wrapper">
              {ammiyehCollection.map((book) => (
                <div key={book.id} className="swiper-slide">
                  <div
                    className="d-flex flex-column align-items-center"
                    id={book.id}
                    onClick={() => navigate(`/publications/book/${book.id}`)}
                    style={{ cursor: "pointer" }}
                  >
                    <img src={book.image} alt={book.imageAlt} />
                    <h3 className={`${styles.heading} text-center mt-4`}>
                      {t(`content.books.ammiyeh.${book.id}.title`)}
                    </h3>
                    {book.subtitle && (
                      <p className={`${styles.subtitle} text-center`}>
                        {t(`content.books.ammiyeh.${book.id}.subtitle`)}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-button-next" />
            <div className="swiper-button-prev" />
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <hr className={`${styles.divider} mx-auto my-2 scroll-section`} />

      {/* ── Fusha Book ── */}
      <section
        className={`${styles.fusha} py-3 my-5 scroll-section`}
        id={fushaBook.id}
        onClick={() => navigate(`/publications/book/${fushaBook.id}`)}
        style={{ cursor: "pointer" }}
      >
        <div className="row justify-content-center" id={styles.row}>
          <div className="col-11 col-md-8 col-xl-5 d-flex flex-column align-items-center align-items-md-center justify-content-center mb-4 mb-md-0">
            <img
              className={`${styles.fushaImg} img-fluid`}
              src={fushaBook.image}
              alt={fushaBook.imageAlt}
            />
          </div>
          <div className="col-11 col-md-8 col-xl-4 d-flex flex-column align-items-start justify-content-center px-4 px-md-3">
            <h4 className="lh-base">{t(`content.books.fusha.${fushaBook.id}.collectionLabel`)}</h4>
            <h1 className="lh-base">{t(`content.books.fusha.${fushaBook.id}.title`)}</h1>
            {fushaBook.subtitle && (
              <h2 className={styles.subtitle}>{t(`content.books.fusha.${fushaBook.id}.subtitle`)}</h2>
            )}
            <h5 className="lh-base">By: {fushaBook.author}</h5>
            {fushaBook.hosted && (
              <p className={styles.hosted}>
                <span className={styles.hostedLabel}>{t("pages.books.publications.text_available_on")}</span>&nbsp;
                {fushaBook.hosted}
              </p>
            )}
            {fushaBook.reviews && fushaBook.reviews.length > 0 && (
              <div className={styles.reviewBlock}>
                <StarRating rating={fushaBook.reviews[0].rating} />
                <p className={styles.reviewComment}>
                  "{t(`content.books.fusha.${fushaBook.id}.reviews.0.comment`)}"
                </p>
                <span className={styles.reviewerName}>
                  — {fushaBook.reviews[0].reviewer}
                </span>
              </div>
            )}
            <p className="lead" style={{ whiteSpace: "pre-line" }}>{t(`content.books.fusha.${fushaBook.id}.description`)}</p>
            <div className="d-flex flex-row w-100 justify-content-start align-items-center my-1">
              <a
                href={fushaBook.viewMoreLink}
                target="_blank"
                className={styles.fushaViewMoreBtn}
                rel="noreferrer"
              >
                {t("pages.books.publications.text_view_more")}</a>

              <button
                onClick={(e) => handleWishlistClick(e, fushaBook)}
                className={`${styles.fushaIconBtn} ${styles.heart} ${isInWishlist(fushaBook.id) ? styles.heartActive : ""}`}
                aria-label={t("pages.books.publications.aria_label_add_to_wishlist")}
                style={{ border: "none", cursor: "pointer" }}
              >
                <img
                  src={
                    isInWishlist(fushaBook.id)
                      ? "/assets/images/icons/heart_brown.webp"
                      : "/assets/images/icons/heart.webp"
                  }
                  alt="wishlist"
                  style={{ width: "26px" }}
                />
              </button>

              <button
                onClick={(e) => handleCartClick(e, fushaBook)}
                className={`${styles.fushaIconBtn} ${styles.cart}`}
                style={{ border: "none", cursor: "pointer" }}
              >
                <img src="/assets/images/icons/cart.webp" alt="cart" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <hr className={`${styles.divider} mx-auto my-2 scroll-section`} />

      {/* ── Podcasts ── */}
<section className={`${styles.podcasts} scroll-section`}>
  <div className={styles.sectionTitle}>
    <span>{t("pages.books.publications.text_guide_to_deewan_arabic_podcast_collection")}</span>
  </div>
  <div className="row py-5 mx-auto">
    <div ref={podcastSwiperRef} className="swiper booksSwiper">
      <div className="swiper-wrapper">
        {podcastSeasons.map((season) => (
          <div key={season.id} className="swiper-slide">
            <div
              className="d-flex flex-column align-items-center"
              id={season.id}
              onClick={() => navigate(`/publications/podcast/${season.id}`)}
              style={{ cursor: "pointer" }}
            >
              <img src={season.image} alt={season.imageAlt} />
              <h3 className={`${styles.heading} text-center mt-4`}>
                {t(`content.books.podcast.${season.id}.title`)}
              </h3>
              {season.subtitle && (
                <p className={`${styles.subtitle} text-center`}>
                  {t(`content.books.podcast.${season.id}.subtitle`)}
                </p>
              )}
              {season.hosted && (
                <p className={`${styles.hosted} text-center`}>
                  {t(`content.books.podcast.${season.id}.hosted`)}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="swiper-button-next" />
      <div className="swiper-button-prev" />
    </div>
  </div>
</section>
      <Footer />
    </Fragment>
  );
}

export default Publications;
