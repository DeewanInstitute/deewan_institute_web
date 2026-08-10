import {Link} from "react-router"; 
import "bootstrap"; 
import style from "./courses.module.scss"
import { useTranslation } from "react-i18next";

function Courses() {
    const { t } = useTranslation();
  return (
    <section className="scroll-section" id={style.courses}>
      <div
        className={`${style.title} mx-auto px-5 scroll-section slide-in-left`}
      >
        <h1>{t("components.courses.courses.text_arabic_programs")}</h1>
      </div>
      <div className="mx-auto text-center my-5 scroll-section" id={style.para}>
        <p>
          {t("components.courses.courses.text_at_deewan_institute_we_proudly_offer_immersive_pro")}</p>
      </div>
      <div className="d-flex flex-row flex-wrap gap-4 justify-content-center scroll-section slide-in-right" id={style.coursesContainer}>
        {/* <!-- First Course --> */}
        <div className={`${style.courseItem} mx-1 col-12 col-md-6 col-lg-4`}>
          <div className={style.front}>
            <img
              id={style.image}
              src={"../assets/images/background/levantine.webp"}
            />
            <span>{t("pages.arabiccourses.colloquial.colloquial.title_colloquial_levantine_arabic")}</span>
          </div>
          <div
            className={`${style.back} d-flex flex-column justify-content-center`}
          >
            <img
              id={style.image}
              src={"../assets/images/background/levantine.webp"}
            />
            <p className="my-3" id={style.para}>
              {t("pages.arabiccourses.colloquial.colloquial.title_colloquial_levantine_arabic")}</p>
            <Link
              id={style.btn}
              className="btn rounded-pill text-decoration-none text-center text-white"
              to="/arabic-courses"
            >
              {t("components.courses.courses.text_view_course")}</Link>
            <a
              id={style.btn}
              className="btn rounded-pill text-decoration-none text-center text-white"
              href="https://docs.google.com/forms/d/e/1FAIpQLScKQTLvV48wnnLa-MG4VYBXHLXQS-5aP7IrO-8_InTxnRqGIQ/viewform"
              target="_blank"
            >
              {t("components.courses.courses.text_join_us")}</a>
          </div>
        </div>
        {/* <!-- Second Course --> */}
        <div className={`${style.courseItem} mx-1 col-12 col-md-6 col-lg-4`}>
          <div className={style.front}>
            <img
              id={style.image}
              src={"../assets/images/background/modern.webp"}
            />
            <span>{t("pages.arabiccourses.msa.msa.title_modern_standard_arabic_msa")}</span>
          </div>
          <div
            className={`${style.back} d-flex flex-column justify-content-center`}
          >
            <img
              id={style.image}
              src={"../assets/images/background/modern.webp"}
            />
            <p className="my-3" id={style.para}>
              {t("pages.arabiccourses.msa.msa.title_modern_standard_arabic_msa")}</p>
            <Link
              id={style.btn}
              className="btn rounded-pill text-decoration-none text-center text-white"
              to="/arabic-courses"
            >
              {t("components.courses.courses.text_view_course")}</Link>
            <a
              id={style.btn}
              className="btn rounded-pill text-decoration-none text-center text-white"
              href="https://docs.google.com/forms/d/e/1FAIpQLScKQTLvV48wnnLa-MG4VYBXHLXQS-5aP7IrO-8_InTxnRqGIQ/viewform"
              target="_blank"
            >
              {t("components.courses.courses.text_join_us")}</a>
          </div>
        </div>
        {/* <!-- Third Course  --> */}
        <div className={`${style.courseItem} mx-1 col-12 col-md-6 col-lg-4`}>
          <div className={style.front}>
            <img
              id={style.image}
              src={"../assets/images/background/hopOnHopOff.webp"}
            />
            <span>{t("components.courses.courses.text_hop_on_hop_off_arabic")}</span>
          </div>
          <div
            className={`${style.back} d-flex flex-column justify-content-center`}
          >
            <img
              id={style.image}
              src={"../assets/images/background/hopOnHopOff.webp"}
            />
            <p className="my-3" id={style.para}>
              {t("components.courses.courses.text_hop_on_hop_off_arabic")}</p>
            <Link
              id={style.btn}
              className="btn rounded-pill text-decoration-none text-center text-white"
              to="/arabic-courses"
            >
              {t("components.courses.courses.text_view_course")}</Link>
            <a
              id={style.btn}
              className="btn rounded-pill text-decoration-none text-center text-white"
              href="https://docs.google.com/forms/d/e/1FAIpQLScKQTLvV48wnnLa-MG4VYBXHLXQS-5aP7IrO-8_InTxnRqGIQ/viewform"
              target="_blank"
            >
              {t("components.courses.courses.text_join_us")}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;
