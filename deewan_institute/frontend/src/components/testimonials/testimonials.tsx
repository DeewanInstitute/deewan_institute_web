import { useEffect, Fragment } from "react";
import styles from "../testimonials/testimonials.module.scss";
import "bootstrap";
import { useTranslation } from "react-i18next";

function Testimonials() {
    const { t } = useTranslation();
  useEffect(() => {
    // Access global Swiper variable provided by the CDN script
    const swiper = new (window as any).Swiper(`.${styles.testimonialsSwiper}`, {
      loop: true,
      grabCursor: true,
      autoplay: {
        delay: 2000, // Time in milliseconds between slides (2 seconds)
        disableOnInteraction: false, // Keeps autoplay running after a user swipes
        pauseOnMouseEnter: true, // Pauses autoplay when the user hovers over it
      },
      slidesPerView: 1,
      spaceBetween: 100,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
    return () => swiper.destroy();
  }, []);

  return (
    <Fragment>
      {/* <!-- Testimonials Section --> */}
      <section className={`${styles.testimonials} py-3`}>
        <div
          className={`${styles.title} mx-auto my-1  px-5 scroll-section slide-in-left`}
        >
          <h1 className={styles.h1}>{t("components.testimonials.testimonials.text_testimonials")}</h1>
        </div>
        <div className="mx-auto text-center my-4 scroll-section">
          <p className={styles.p}>
            {t("components.youtubeslider.youtubeslider.text_deewan_institute_has_students_from_all_over_the_wo")}</p>
        </div>
        <div className="container d-flex align-content-center" style={{ height: "100%" }}>
          <div className={`swiper ${styles.testimonialsSwiper}`}>
            <div className="swiper-wrapper">
              {/* <!-- Testimonial Card 1 --> */}
              <div className="swiper-slide">
                <div className={styles.testimonialCard}>
                  <img
                    src={"/assets/images/others/stars.webp"}
                    alt={t("components.testimonials.testimonials.alt_rating")}
                    className={styles.testimonialImg}
                  />
                  <p className={styles.testimonialQuote}>
                    {t("components.testimonials.testimonials.text_i_had_just_a_couple_of_weeks_in_amman_and_wanted_t")}</p>
                  <hr />
                  <h5 className={styles.testimonialName}>{t("components.testimonials.testimonials.text_azmad")}</h5>
                </div>
              </div>
              {/* <!-- Testimonial Card 2 --> */}
              <div className="swiper-slide">
                <div className={styles.testimonialCard}>
                  <img
                    src={"/assets/images/others/stars.webp"}
                    alt={t("components.testimonials.testimonials.alt_rating")}
                    className={styles.testimonialImg}
                  />
                  <p className={styles.testimonialQuote}>
                    {t("components.testimonials.testimonials.text_the_deewan_institute_is_a_professional_and_friendl")}</p>
                  <hr />
                  <h5 className={styles.testimonialName}>{t("components.testimonials.testimonials.text_malou_butters")}</h5>
                </div>
              </div>
              {/* <!-- Testimonial Card 3 --> */}
              <div className="swiper-slide">
                <div className={styles.testimonialCard}>
                  <img
                    src={"/assets/images/others/stars.webp"}
                    alt={t("components.testimonials.testimonials.alt_rating")}
                    className={styles.testimonialImg}
                  />
                  <p className={styles.testimonialQuote}>
                    {t("components.testimonials.testimonials.text_i_highly_highly_recommend_deewan_institute_i_spent")}</p>
                  <hr />
                  <h5 className={styles.testimonialName}>{t("components.testimonials.testimonials.text_sibel_k")}</h5>
                </div>
              </div>
              {/* <!-- Testimonial Card 4 --> */}
              <div className="swiper-slide">
                <div className={styles.testimonialCard}>
                  <img
                    src={"/assets/images/others/stars.webp"}
                    alt={t("components.testimonials.testimonials.alt_rating")}
                    className={styles.testimonialImg}
                  />
                  <p className={styles.testimonialQuote}>
                    {t("components.testimonials.testimonials.text_i_really_enjoyed_my_time_at_deewan_the_teachers_ar")}</p>
                  <hr />
                  <h5 className={styles.testimonialName}>{t("components.testimonials.testimonials.text_julie_dahl")}</h5>
                </div>
              </div>
              {/* <!-- Testimonial Card 5 --> */}
              <div className="swiper-slide">
                <div className={styles.testimonialCard}>
                  <img
                    src={"/assets/images/others/stars.webp"}
                    alt={t("components.testimonials.testimonials.alt_rating")}
                    className={styles.testimonialImg}
                  />
                  <p className={styles.testimonialQuote}>
                    {t("components.testimonials.testimonials.text_i_spent_5_weeks_at_deewan_for_an_intensive_languag")}</p>
                  <hr />
                  <h5 className={styles.testimonialName}>{t("components.testimonials.testimonials.text_isacco_cividini")}</h5>
                </div>
              </div>
              {/* <!-- Testimonial Card 6 --> */}
              <div className="swiper-slide">
                <div className={styles.testimonialCard}>
                  <img
                    src={"/assets/images/others/stars.webp"}
                    alt={t("components.testimonials.testimonials.alt_rating")}
                    className={styles.testimonialImg}
                  />
                  <p className={styles.testimonialQuote}>
                    {t("components.testimonials.testimonials.text_i_attended_a_few_classes_at_deewan_while_i_was_in_")}</p>
                  <hr />
                  <h5 className={styles.testimonialName}>{t("components.testimonials.testimonials.text_alessandra_bonerba")}</h5>
                </div>
              </div>
              {/* <!-- Testimonial Card 7 --> */}
              <div className="swiper-slide">
                <div className={styles.testimonialCard}>
                  <img
                    src={"/assets/images/others/stars.webp"}
                    alt={t("components.testimonials.testimonials.alt_rating")}
                    className={styles.testimonialImg}
                  />
                  <p className={styles.testimonialQuote}>
                    {t("components.testimonials.testimonials.text_perfect_place_for_arabic_learning_in_amman_great_t")}</p>
                  <hr />
                  <h5 className={styles.testimonialName}>{t("components.testimonials.testimonials.text_hyunji_kim")}</h5>
                </div>
              </div>
              {/* <!-- Testimonial Card 8 --> */}
              <div className="swiper-slide">
                <div className={styles.testimonialCard}>
                  <img
                    src={"/assets/images/others/stars.webp"}
                    alt={t("components.testimonials.testimonials.alt_rating")}
                    className={styles.testimonialImg}
                  />
                  <p className={styles.testimonialQuote}>
                    {t("components.testimonials.testimonials.text_i_highly_recommend_deewan_institute_for_learning_a")}</p>
                  <hr />
                  <h5 className={styles.testimonialName}>{t("components.testimonials.testimonials.text_samira_bavand")}</h5>
                </div>
              </div>
              {/* <!-- Testimonial Card 9 --> */}
              <div className="swiper-slide">
                <div className={styles.testimonialCard}>
                  <img
                    src={"/assets/images/others/stars.webp"}
                    alt={t("components.testimonials.testimonials.alt_rating")}
                    className={styles.testimonialImg}
                  />
                  <p className={styles.testimonialQuote}>
                    {t("components.testimonials.testimonials.text_i_did_a_month_long_course_at_deewan_there_s_a_lot_")}</p>
                  <hr />
                  <h5 className={styles.testimonialName}>{t("components.testimonials.testimonials.text_roshan_sam")}</h5>
                </div>
              </div>
            </div>

            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
export default Testimonials;
