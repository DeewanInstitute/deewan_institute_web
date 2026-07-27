import { Fragment } from "react";
import style from "./openhours.module.scss";
import "bootstrap";
import { useTranslation } from "react-i18next";

interface OpenHoursProps {
  backgroundColor: string;
  color: string;
}

function OpenHours({ data }: { data: OpenHoursProps }) {
    const { t } = useTranslation();
  return (
    <Fragment>
      <section
        className={`${style.openingHours} scroll-section py-4 py-md-5`}
        style={
          {
            "--background-color": data.backgroundColor,
            "--color": data.color,
          } as React.CSSProperties
        }
      >
        <div className="container">
          <div className={`${style.title} my-5`}>
            <h2 className={style.sectionTitle}>{t("pages.contact.contact.text_opening_hours")}</h2>
          </div>

          <div className="row flex-wrap justify-content-center align-items-start g-3 mt-2">
            {/* Office Hours */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className={style.borderRight}>
                <h3 className="fw-bold">{t("pages.contact.contact.text_office_hours")}</h3>
                <ul>
                  <li>{t("pages.contact.contact.text_sun_thurs_9_00_am_20_00_pm")}</li>
                </ul>
                <span className={style.italic}>
                  {t("pages.contact.contact.text_come_visit_us_we_d_love_to_see_you")}</span>
              </div>
            </div>

            {/* Class Hours */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className={style.borderRight}>
                <h3 className="fw-bold">{t("pages.contact.contact.text_class_hours")}</h3>
                <ul>
                  <li>{t("pages.contact.contact.text_sun_thurs_9_00_am_20_00_pm")}</li>
                </ul>
                <span className={style.italic}>
                  {t("pages.contact.contact.text_for_saturday_please_contact_us")}</span>
              </div>
            </div>

            {/* Workspace */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className={style.borderRight}>
                <h3 className="fw-bold">{t("pages.contact.contact.text_workspace")}</h3>
                <ul>
                  <li>{t("pages.contact.contact.text_sun_thurs_9_00_am_20_00_pm")}</li>
                </ul>
                <span className={style.italic}>
                  {t("pages.contact.contact.text_it_is_provided_free_of_charge_to_deewan_students")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default OpenHours;
