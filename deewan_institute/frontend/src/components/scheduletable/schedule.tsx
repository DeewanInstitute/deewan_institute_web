import { Fragment } from "react";
import style from './schedule.module.scss';
import { useTranslation } from "react-i18next";

interface ScheduleProps {
    subtitle: string,
    iconImage: string, 
    oneTotalPrice: string, 
    groupTotalPrice: string, 
    oneHours: string, 
    groupHours: string,
}

function Schedule({data}: {data: ScheduleProps}) {
    const { t } = useTranslation();
  return (
    <Fragment>
      <div id={style.hours}>
        <div className="d-flex flex-column flex-md-row align-items-center scroll-section slide-in-left">
          <img 
            src={data.iconImage} 
            alt="Icon" 
            className="mb-3 mb-md-0" 
            style={{ maxWidth: '50px', height: 'auto' }} 
          />
          <h2 className={`${style.subtitle} mx-md-5 my-auto mb-3 mb-md-0`}>{data.subtitle}</h2>
        </div>
        <p className={`lead m-3 text-center scroll-section ${style.para}`}>
          {t("components.scheduletable.schedule.text_this_course_is_exclusively_for_university_language")}</p>
        <h4 className={`text-center scroll-section ${style.h4}`}>
          {t("components.scheduletable.schedule.text_levels_beginner_intermediate_or_advanced")}</h4>
        
        {/* Desktop Table - Hidden on Mobile */}
        <div className="table-responsive my-4 d-none d-md-block">
          <table
            className="table table-bordered my-3"
            id={style.table}
          >
            <thead>
              <tr>
                <th
                  className="text-center"
                  colSpan={2}
                  id={style.header}
                  style={{ verticalAlign: "middle", paddingBlock: "2%" }}
                >
                  {t("components.scheduletable.schedule.text_one_to_one_course")}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border justify-content-center" id={style.border}>
                <td
                  className="lh-base d-flex flex-column align-items-center"
                  scope="row"
                  style={{ paddingBlock: "2%", verticalAlign: "middle" }}
                >
                  <span className="lead">
                    {t("components.scheduletable.schedule.text_for_each_week_there_will_be_one_to_one_course")}</span>
                  <ul className="lead mb-0">
                    <li>{t("components.scheduletable.schedule.text_4_hours_per_day_5_days_per_week")}</li>
                    <li>
                      {t("components.scheduletable.schedule.text_20_hours_per_week")}<span style={{ color: "red" }}>( Total : {data.oneHours} )</span>
                    </li>
                  </ul>
                </td>
                <td
                  className="text-center"
                  style={{ paddingBlock: "2%", verticalAlign: "middle" }}
                >
                  <p className="lead mb-1">{t("components.scheduletable.schedule.text_10_5_jd_per_hour")}</p>
                  <span className="lead" style={{ color: "red" }}>
                    Total : {data.oneTotalPrice}
                  </span>
                </td>
              </tr>
              {/* <tr>
                <th
                  className="text-center"
                  colSpan={2}
                  id={style.header}
                  style={{ verticalAlign: "middle", paddingBlock: "2%" }}
                >
                  Group Course
                </th>
              </tr>
              <tr className="border" id={style.border}>
                <td
                  className="lh-base d-flex flex-column align-items-center"
                  scope="row"
                  style={{ paddingBlock: "2%", verticalAlign: "middle" }}
                >
                  <span className="lead">
                    For each week, there will be group course:
                  </span>
                  <ul className="lead mb-0">
                    <li>4 hours per day - 5 days per week</li>
                    <li>
                      20 hours per week
                      <span style={{ color: "red" }}>( Total : {data.groupHours} )</span>
                    </li>
                  </ul>
                </td>
                <td
                  className="text-center"
                  style={{ paddingBlock: "2%", verticalAlign: "middle" }}
                >
                  <p className="lead mb-1">11 JD per hour</p>
                  <span className="lead" style={{ color: "red" }}>
                    Total : {data.groupTotalPrice}
                  </span>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards - Visible Only on Mobile */}
        <div className="my-4 d-md-none">
          {/* One-to-One Card */}
          <div className={`${style.mobileCard} mb-4 scroll-section`}>
            <h3 className={`${style.mobileCardTitle} text-center mb-3`}>{t("components.scheduletable.schedule.text_one_to_one_course")}</h3>
            <div className={`${style.mobileCardRow} mb-3`}>
              <span className={style.mobileCardLabel}>{t("components.scheduletable.schedule.text_schedule")}</span>
              <span className={style.mobileCardValue}>{t("components.scheduletable.schedule.text_4_hours_day_5_days_week")}</span>
            </div>
            <div className={`${style.mobileCardRow} mb-3`}>
              <span className={style.mobileCardLabel}>{t("components.scheduletable.schedule.text_weekly_hours")}</span>
              <span className={style.mobileCardValue}>{t("components.scheduletable.schedule.text_20_hours")}<span style={{ color: "red" }}>(Total: {data.oneHours})</span></span>
            </div>
            <div className={`${style.mobileCardRow} mb-3`}>
              <span className={style.mobileCardLabel}>{t("components.scheduletable.schedule.text_rate")}</span>
              <span className={style.mobileCardValue}>{t("components.scheduletable.schedule.text_10_jd_per_hour")}</span>
            </div>
            <div className={`${style.mobileCardTotal} text-center mt-3`}>
              <span>{t("context.checkout.text_total")}<span style={{ color: "red", fontWeight: "bold" }}>{data.oneTotalPrice}</span></span>
            </div>
          </div>

          {/* Group Card */}
          <div className={`${style.mobileCard} mb-4 scroll-section`}>
            <h3 className={`${style.mobileCardTitle} text-center mb-3`}>{t("components.scheduletable.schedule.text_group_course")}</h3>
            <div className={`${style.mobileCardRow} mb-3`}>
              <span className={style.mobileCardLabel}>{t("components.scheduletable.schedule.text_schedule")}</span>
              <span className={style.mobileCardValue}>{t("components.scheduletable.schedule.text_4_hours_day_5_days_week")}</span>
            </div>
            <div className={`${style.mobileCardRow} mb-3`}>
              <span className={style.mobileCardLabel}>{t("components.scheduletable.schedule.text_weekly_hours")}</span>
              <span className={style.mobileCardValue}>{t("components.scheduletable.schedule.text_20_hours")}<span style={{ color: "red" }}>(Total: {data.groupHours})</span></span>
            </div>
            <div className={`${style.mobileCardRow} mb-3`}>
              <span className={style.mobileCardLabel}>{t("components.scheduletable.schedule.text_rate")}</span>
              <span className={style.mobileCardValue}>{t("components.scheduletable.schedule.text_11_jd_per_hour")}</span>
            </div>
            <div className={`${style.mobileCardTotal} text-center mt-3`}>
              <span>{t("context.checkout.text_total")}<span style={{ color: "red", fontWeight: "bold" }}>{data.groupTotalPrice}</span></span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Schedule;
