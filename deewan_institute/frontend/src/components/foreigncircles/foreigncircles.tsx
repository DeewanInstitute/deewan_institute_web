import {Fragment} from "react"; 
import style from "./foreigncircle.module.scss";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ForeignCircles(){
    const { t } = useTranslation();
    return (
        <Fragment>
            <section className={style.foreign}>
            <div className={`${style.title} mx-auto my-1  px-5 scroll-section slide-in-left`}>
               <h1 className={style.h1}> {t("components.foreigncircles.foreigncircles.text_other_languages_we_offer")}</h1>
            </div>
            <div className="mx-auto text-center my-5 scroll-section">
               <p id={style.para}>{t("components.foreigncircles.foreigncircles.text_at_deewan_institute_we_proudly_offer_immersive_cou")}</p>
            </div>
            <div className="d-flex flex-row gap-5 justify-content-center flex-wrap scroll-section" id={style.foreignGroup}>
               <div className="d-flex flex-column gap-4 align-items-center">
                  <img className="rounded-circle" id={style.image} src="/assets/images/others/english.png" alt="Generic placeholder image"
                     width="300" height="300" />
                  <h4 className={style.heading}>{t("pages.bildungsurlaub.bildungsurlaub.text_english")}</h4>
                  <NavLink className={style.button} to="/foreign-languages/english-course" target="_blank" role="button">{t("components.foreigncircles.foreigncircles.text_view_courses")}</NavLink>
               </div>
               <div className="d-flex flex-column gap-4 align-items-center">
                  <img className="rounded-circle" id={style.image} src="/assets/images/others/french.png" alt="Generic placeholder image"
                     width="300" height="300" />
                  <h4 className={style.heading}>{t("components.navbar.navbar.label_french")}</h4>
                  <NavLink className={style.button} to="/foreign-languages/french-course" target="_blank" role="button">{t("components.foreigncircles.foreigncircles.text_view_courses")}</NavLink>
               </div>
               <div className="d-flex flex-column gap-4 align-items-center">
                  <img className="rounded-circle" id={style.image} src="/assets/images/others/spanish.png" alt="Generic placeholder image"
                     width="300" height="300" />
                  <h4 className={style.heading}>{t("components.navbar.navbar.label_spanish")}</h4>
                  <NavLink className={style.button} to="/foreign-languages/spanish-course" target="_blank" role="button">{t("components.foreigncircles.foreigncircles.text_view_courses")}</NavLink>
               </div>
               <div className="d-flex flex-column gap-4 align-items-center">
                  <img className="rounded-circle" id={style.image} src="/assets/images/others/germany.png" alt="Generic placeholder image"
                     width="300" height="300" />
                  <h4 className={style.heading}>{t("pages.bildungsurlaub.bildungsurlaub.text_german")}</h4>
                  <NavLink className={style.button} to="/foreign-languages/german-course" target="_blank" role="button">{t("components.foreigncircles.foreigncircles.text_view_courses")}</NavLink>
               </div>
            </div>
         </section>
        </Fragment>

    ); 
}

export default ForeignCircles; 