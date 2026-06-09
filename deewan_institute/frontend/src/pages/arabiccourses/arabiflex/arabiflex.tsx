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

// Data

const objectives = [
  {
    icon: "/assets/images/icons/arabiflex-icon1.png",
    label: "Enhance language fluency in real-life situations.",
  },
  {
    icon: "/assets/images/icons/arabiflex-icon2.png",
    label: "Develop analytical & critical thinking skills.",
  },
  {
    icon: "/assets/images/icons/arabiflex-icon3.png",
    label: "Understand Arab culture & the social and political context.",
  },
  {
    icon: "/assets/images/icons/arabiflex-icon4.png",
    label: "Differentiate between Modern Standard Arabic and dialects.",
  },
];

const classStructure = [
  {
    stage: "Warm-Up Conversation",
    time: "15 min",
    technique:
      "Quick discussion (news, personal experience), open-ended question.",
  },
  {
    stage: "Listening Skill",
    time: "15 min",
    technique:
      "Arabic video/podcast (identify the main idea, highlight new vocabulary, discuss the content)",
  },
  {
    stage: "Learning through Games",
    time: "20 min",
    technique: "Electronic games and physical (hands-on) games.",
    isBreakAfter: true,
  },
  {
    stage: "Conversation & Vocabularies",
    time: "30 min",
    technique:
      "Interactive activities: (Discussion, Debate, Role play)\nWriting new vocabularies.",
  },
];

const programDetails = [
  {
    icon: "/assets/images/icons/arabiflex-icon5.png",
    label: "Mode of Study:\nIn-Person",
  },
  {
    icon: "/assets/images/icons/arabiflex-icon6.png",
    label: "Session Duration:\n90 minutes",
  },
  {
    icon: "/assets/images/icons/arabiflex-icon7.png",
    label: "Attendance Options:\n1, 2, or 3 sessions per week",
  },
  {
    icon: "/assets/images/icons/arabiflex-icon8.png",
    label: "Schedule: Sunday, Tuesday, and Thursday\n6:20 PM – 8:00 PM",
  },
];

// ─────────────────────────────────────────────────────────────────────────────

function ArabiFlex() {
  useEffect(() => {
    document.title = "ArabiFlex Conversation Group Class";
  }, []);

  useScrollAnimation();

  return (
    <Fragment>
      <NavBar />
      <FloatingActionButton />
      <FloatingActionButtonInstitute />

      {/* Banner */}
      <ShadowBanner
        data={{
          title: "ArabiFlex Conversation \nGroup Class",
          backgroundImg: "/assets/images/banner/arabiflex-banner.png",
          rgbColor: "46, 15, 40, 0.69",
          titleBgColor: "46, 15, 40",
        }}
      />

      <div className={style.arabiflex}>
        <main>
          {/* Hero Title */}
          <HeroTitle
            subtitle="ArabiFlex Conversation Group Class"
            title="Interactive, Conversation-Based Course."
            color="#2e0f28"
          />

          {/* Full-width image */}
          <section className={`${style.imageSection} scroll-section`}>
            <img
              src="/assets/images/others/arabiflex-pic.png"
              alt="conversation bubbles"
              className={style.fullImage}
            />
          </section>

          {/* Intro paragraph */}
          <section className={`${style.intro} scroll-section`}>
            <p>
              ArabiFlex Conversation Group Class is a flexible group program
              designed for students who want to improve their Levantine
              colloquial Arabic through regular conversation practice. The
              program meets three times per week, allowing students to choose
              the schedule that best fits their availability.
            </p>
            <p>
              Through interactive discussions and real-life communication
              activities, students develop speaking confidence, listening
              skills, and everyday vocabulary in a supportive learning
              environment. ArabiFlex Conversation Group Class is ideal for
              learners who want consistent Arabic practice while maintaining
              flexibility in their weekly schedule.
            </p>
          </section>
        </main>
      </div>

      {/*Program Objectives*/}
      <section className={style.objectives}>
        <div className={style.objectivesInner}>
          <h2 className="scroll-section">Program Objectives</h2>
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
          <h2>Class Structure</h2>
          <hr className={style.sectionDivider} />
          <p className={style.structureSubtitle}>
            Each session combines conversation practice, listening activities,
            vocabulary development, and fluency-building exercises. Students
            participate in discussions, role-plays, storytelling, and real-life
            communication tasks that encourage active language use and
            meaningful interaction.
          </p>

          <div className={style.tableWrapper}>
            <table className={style.structureTable}>
              <colgroup>
                <col style={{ width: "33.33%" }} />
                <col style={{ width: "33.33%" }} />
                <col style={{ width: "33.34%" }} />
              </colgroup>
              <thead>
                <tr>
                  <th>Class Stage</th>
                  <th>Approximate Time</th>
                  <th>Technique</th>
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
                        <td colSpan={3}>Break</td>
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
          <h2 className="scroll-section">Program Details</h2>
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
          <h2>Entry Requirements</h2>
          <hr className={style.sectionDivider} />
          <p>
            ArabiFlex is intended for learners with an existing foundation in
            Arabic. Students must have a minimum B1 level of Arabic or
            equivalent conversational ability to participate effectively in the
            program.
          </p>
        </section>
      </div>

      <Footer />
    </Fragment>
  );
}

export default ArabiFlex;
