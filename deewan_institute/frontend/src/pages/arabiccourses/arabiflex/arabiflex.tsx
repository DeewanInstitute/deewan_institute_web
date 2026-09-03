import { Fragment, useEffect } from "react";
import NavBar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";
import ShadowBanner from "../../../components/shadowbanner/shadowbanner";
import { useScrollAnimation } from "../../../../hooks/scrollAnimations";
import style from "./arabiflex.module.scss";
import "../../../style/animation.scss";
import "bootstrap";
import FloatingActionButton from "../../../components/floatingbutton/floatingactionbutton";
import FloatingActionButtonInstitute from "../../../components/floatingbutton/floatingactionbuttoninstitute";
import HeroTitle from "../../../components/herotitle/herotitle";
import { useTranslation } from "react-i18next";
import BottomBanner from "../../../components/bottombanner/bottombanner";

// ─────────────────────────────────────────────────────────────────────────────

function ArabiFlex() {
    const { t } = useTranslation();
  useEffect(() => {
    document.title = "ArabiFlex Conversation Group Class";
  }, []);

  useScrollAnimation();

  // Data (translated — must live inside the component to access `t`)

  const objectives = [
    {
      icon: "/assets/images/icons/arabiflex-icon1.webp",
      label: t("pages.arabiccourses.arabiflex.arabiflex.label_enhance_language_fluency_in_real_life_situations"),
    },
    {
      icon: "/assets/images/icons/arabiflex-icon2.webp",
      label: t("pages.arabiccourses.arabiflex.arabiflex.label_develop_analytical_and_critical_thinking_skills"),
    },
    {
      icon: "/assets/images/icons/arabiflex-icon3.webp",
      label: t("pages.arabiccourses.arabiflex.arabiflex.label_understand_arab_culture_and_the_social_and_politi"),
    },
    {
      icon: "/assets/images/icons/arabiflex-icon4.webp",
      label: t("pages.arabiccourses.arabiflex.arabiflex.label_differentiate_between_modern_standard_arabic_and_"),
    },
  ];

  const classStructure = [
    {
      stage: t("pages.arabiccourses.arabiflex.arabiflex.stage_warm_up_conversation"),
      time: t("pages.arabiccourses.arabiflex.arabiflex.time_15_min"),
      technique: t("pages.arabiccourses.arabiflex.arabiflex.technique_quick_discussion_news_personal_experience_ope"),
    },
    {
      stage: t("pages.arabiccourses.arabiflex.arabiflex.stage_listening_skill"),
      time: t("pages.arabiccourses.arabiflex.arabiflex.time_15_min"),
      technique: t("pages.arabiccourses.arabiflex.arabiflex.technique_arabic_video_podcast_identify_the_main_idea_h"),
    },
    {
      stage: t("pages.arabiccourses.arabiflex.arabiflex.stage_learning_through_games"),
      time: t("pages.arabiccourses.arabiflex.arabiflex.time_20_min"),
      technique: t("pages.arabiccourses.arabiflex.arabiflex.technique_electronic_games_and_physical_hands_on_games"),
      isBreakAfter: true,
    },
    {
      stage: t("pages.arabiccourses.arabiflex.arabiflex.stage_conversation_and_vocabularies"),
      time: t("pages.arabiccourses.arabiflex.arabiflex.time_30_min"),
      technique: t("pages.arabiccourses.arabiflex.arabiflex.technique_interactive_activities_discussion_debate_role"),
    },
  ];

  const programDetails = [
    {
      icon: "/assets/images/icons/arabiflex-icon5.webp",
      label: t("pages.arabiccourses.arabiflex.arabiflex.label_mode_of_study_nin_person"),
    },
    {
      icon: "/assets/images/icons/arabiflex-icon6.webp",
      label: t("pages.arabiccourses.arabiflex.arabiflex.label_session_duration_n90_minutes"),
    },
    {
      icon: "/assets/images/icons/arabiflex-icon7.webp",
      label: t("pages.arabiccourses.arabiflex.arabiflex.label_attendance_options_n1_2_or_3_sessions_per_week"),
    },
    {
      icon: "/assets/images/icons/arabiflex-icon8.webp",
      label: t("pages.arabiccourses.arabiflex.arabiflex.label_schedule_sunday_tuesday_and_thursday_n6_20_pm_8_0"),
    },
  ];

  return (
    <Fragment>
      <NavBar />
      <FloatingActionButton />
      <FloatingActionButtonInstitute />

      {/* Banner */}
      <ShadowBanner
        data={{
          title: t("pages.arabiccourses.arabiflex.arabiflex.title_arabiflex_conversation_ngroup_class"),
          backgroundImg: "/assets/images/banner/arabiflex-banner.webp",
          rgbColor: "46, 15, 40, 0.69",
          titleBgColor: "46, 15, 40",
        }}
      />

      <div className={style.arabiflex}>
        <main>
          {/* Hero Title */}
          <HeroTitle
            subtitle={t("pages.arabiccourses.arabiflex.arabiflex.title_arabiflex_conversation_group_class")}
            title={t("pages.arabiccourses.arabiflex.arabiflex.title_interactive_conversation_based_course")}
            color="#2e0f28"
          />

          {/* Full-width image */}
          <section className={`${style.imageSection} scroll-section`}>
            <img
              src="/assets/images/others/arabiflex-pic.webp"
              alt={t("pages.arabiccourses.arabiflex.arabiflex.alt_conversation_bubbles")}
              className={style.fullImage}
            />
          </section>

          {/* Intro paragraph */}
          <section className={`${style.intro} scroll-section`}>
            <p>
              {t("pages.arabiccourses.arabiflex.arabiflex.text_arabiflex_conversation_group_class_is_a_flexible_g")}</p>
            <p>
              {t("pages.arabiccourses.arabiflex.arabiflex.text_through_interactive_discussions_and_real_life_comm")}</p>
          </section>
        </main>
      </div>

      {/*Program Objectives*/}
      <section className={style.objectives}>
        <div className={style.objectivesInner}>
          <h2 className="scroll-section">{t("pages.arabiccourses.arabiflex.arabiflex.text_program_objectives")}</h2>
          <hr className={style.objDivider} />

          <div className={`row justify-content-center ${style.objCards}`}>
            {objectives.map((obj, i) => (
              <div
                key={i}
                className="col-12 col-sm-6 col-md-3 d-flex flex-column align-items-center scroll-section"
              >
                <div className={style.objIconWrap}>
                  <img
                    src={obj.icon}
                    alt={obj.label}
                    className={style.objIcon}
                  />
                </div>
                <p>{obj.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={style.arabiflex}>
        {/* ── Class Structure ── */}
        <section className={`${style.classStructure} scroll-section`}>
          <h2>{t("pages.arabiccourses.arabiflex.arabiflex.text_class_structure")}</h2>
          <hr className={style.sectionDivider} />
          <p className={style.structureSubtitle}>
            {t("pages.arabiccourses.arabiflex.arabiflex.text_each_session_combines_conversation_practice_listen")}</p>

          <div className={style.tableWrapper}>
            <table className={style.structureTable}>
              <colgroup>
                <col style={{ width: "33.33%" }} />
                <col style={{ width: "33.33%" }} />
                <col style={{ width: "33.34%" }} />
              </colgroup>
              <thead>
                <tr>
                  <th>{t("pages.arabiccourses.arabiflex.arabiflex.text_class_stage")}</th>
                  <th>{t("pages.arabiccourses.arabiflex.arabiflex.text_approximate_time")}</th>
                  <th>{t("pages.arabiccourses.arabiflex.arabiflex.text_technique")}</th>
                </tr>
              </thead>
              <tbody>
                {classStructure.map((row, i) => (
                  <Fragment key={i}>
                    <tr>
                      <td>{row.stage}</td>
                      <td>{row.time}</td>
                      <td className={style.techniqueCell}>
                        {row.technique.split("\n").map((line, j) => (
                          <span key={j}>
                            {j > 0 && "– "}
                            {line}
                            {j < row.technique.split("\n").length - 1 && <br />}
                          </span>
                        ))}
                      </td>
                    </tr>
                    {row.isBreakAfter && (
                      <tr className={style.breakRow}>
                        <td colSpan={3}>{t("pages.arabiccourses.arabiflex.arabiflex.text_break")}</td>
                      </tr>
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/*Program Details*/}
      <section className={style.programDetails}>
        <div className={style.detailsInner}>
          <h2 className="scroll-section">{t("pages.arabiccourses.arabiflex.arabiflex.text_program_details")}</h2>
          <hr className={style.detailsDivider} />

          <div className={`row justify-content-center ${style.detailCards}`}>
            {programDetails.map((detail, i) => (
              <div
                key={i}
                className="col-12 col-sm-6 col-md-3 d-flex flex-column align-items-center scroll-section"
              >
                <div className={style.detailIconWrap}>
                  <img
                    src={detail.icon}
                    alt={detail.label}
                    className={style.detailIcon}
                  />
                </div>
                <p>
                  {detail.label.split("\n").map((line, j) => (
                    <Fragment key={j}>
                      {line}
                      {j < detail.label.split("\n").length - 1 && <br />}
                    </Fragment>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={style.arabiflex}>
        {/* ── Entry Requirements ── */}
        <section className={`${style.entryReqs} scroll-section`}>
          <h2>{t("pages.arabiccourses.arabiflex.arabiflex.text_entry_requirements")}</h2>
          <hr className={style.sectionDivider} />
          <p>
            {t("pages.arabiccourses.arabiflex.arabiflex.text_arabiflex_is_intended_for_learners_with_an_existin")}</p>
        </section>
                            <BottomBanner
                        data={{
                            mainText: t("pages.arabiccourses.arabiflex.arabiflex.maintext_enroll_in_arabiflex_program_now"),
                            buttonText: t("data.english.bottombannerbuttontitle_enroll_now"),
                            primaryColor: "#2e0f28",
                            backgroundImg: "../assets/images/others/arabiflex-bottom.jpg",
                        }}
                    />
      </div>

      <Footer />
    </Fragment>
  );
}

export default ArabiFlex;
