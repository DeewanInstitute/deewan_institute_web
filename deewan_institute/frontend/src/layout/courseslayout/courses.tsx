import { Fragment } from "react/jsx-runtime";
import styles from "./course.module.scss";
import "../../style/animation.scss";
import { useScrollAnimation } from "../../../hooks/scrollAnimations";
import "bootstrap";
import FloatingActionButton from "../../components/floatingbutton/floatingactionbutton";
import FloatingActionButtonInstitute from "../../components/floatingbutton/floatingactionbuttoninstitute";
import { useTranslation } from "react-i18next";

interface arabicCourse {
  title: string;
  courses: Array<{
    arabicTitle: string;
    title: string;
    description: string;
    buttonText?: string;
    learnMoreButton?: string;
    buttonLink?: string;
    listDescription?: string;
    learnMoreLink?: string;
    list?: Array<{
      type: string;
    }>;
  }>;
}

function Courses({ data }: { data: arabicCourse }) {
    const { t } = useTranslation();
  useScrollAnimation();

  // const renderCourseButton = (course: arabicCourse["courses"][number]) => {
    const renderCourseButtons = (course: arabicCourse["courses"][number], courseIndex: number) => {
  const buttons = [
    {
      text: course.buttonText,
      link: course.buttonLink,
      key: "buttonText",
    },
    {
      text: course.learnMoreButton,
      link: course.learnMoreLink,
      key: "learnMoreButton",
    },
  ].filter((button) => button.text && button.link);

  if (!buttons.length) return null;

  return (
    <div className={styles.courseActions}>
      {buttons.map((button) => (
        <a
          key={button.key}
          href={button.link}
          className={`btn ${styles.courseButton}`}
          target={button.link?.startsWith("http") ? "_blank" : undefined}
          rel={button.link?.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {t(`content.arabicCourses.courses.${courseIndex}.${button.key}`)}
        </a>
      ))}
    </div>
  );
};

  return (
    <Fragment>
      <FloatingActionButton />
      <FloatingActionButtonInstitute />

      <section className={`${styles.courses} pb-5`}>
        <div className={`${styles.title} mt-5 scroll-section`}>
          <h1>{t("pages.arabiccourses.arabicCourses.title_arabic_courses")}</h1>
        </div>

        <h5 className="text-black my-5 lh-base scroll-section">
          {t("ui.course_evaluation_prefix")}{" "}
          <a
            className="text-decoration-none"
            href="https://docs.google.com/forms/d/e/1FAIpQLScKQTLvV48wnnLa-MG4VYBXHLXQS-5aP7IrO-8_InTxnRqGIQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("layout.courseslayout.courses.text_initial_skills_evaluation_or_course_placement_cons")}</a>{" "}
          {t("ui.course_evaluation_suffix")}
        </h5>

        {/* First Row */}
        <div
          className="row d-flex flex-row flex-nowrap scroll-section"
          id={styles.firstRow}
        >
          {data.courses.slice(0, 3).map((course, index) => (
            <div
              key={index}
              className={`${styles.courseItem} mx-1 col-12 col-md-4 col-lg-3`}
            >
              <div
                className={`${styles.front} d-flex flex-column justify-content-center align-items-center`}
              >
                <h2
                  className="pt-5 mb-0 pb-0 text-center"
                  id={styles.arabCalligraphy}
                >
                  {course.arabicTitle}
                </h2>
                <h2 className="pt-5 mb-0 pb-0 text-center">{course.title}</h2>
              </div>

              <div
                className={`${styles.back} d-flex flex-column justify-content-center`}
              >
                <p className="mx-5 my-3" style={{ whiteSpace: "pre-line" }}>{t(`content.arabicCourses.courses.${index}.description`)}</p>

                {course.listDescription && (
                  <p className="mx-5 fw-bold">{t(`content.arabicCourses.courses.${index}.listDescription`)}</p>
                )}

                {course.list?.map((_, listIndex) => (
                  <ul key={listIndex} className="mx-5">
                    <li>
                      <span>{t(`content.arabicCourses.courses.${index}.list.${listIndex}`)}</span>
                    </li>
                  </ul>
                ))}

                {renderCourseButtons(course, index)}
              </div>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div
          className="d-flex flex-row flex-nowrap mt-5 scroll-section"
          id={styles.secondRow}
        >
          {data.courses.slice(3, 6).map((course, index) => (
            <div
              key={index}
              className={`${styles.courseItem} mx-1 col-12 col-md-4 col-lg-3`}
            >
              <div
                className={`${styles.front} d-flex flex-column justify-content-center align-items-center`}
              >
                <h2
                  className="pt-5 mb-0 pb-0 text-center"
                  id={styles.arabCalligraphy}
                >
                  {course.arabicTitle}
                </h2>
                <h2 className="pt-5 mb-0 pb-0 text-center">{course.title}</h2>
              </div>

              <div
                className={`${styles.back} d-flex flex-column justify-content-center`}
              >
                <p className="mx-5 my-3 text-black" style={{ whiteSpace: "pre-line" }}>{t(`content.arabicCourses.courses.${index + 3}.description`)}</p>
                {renderCourseButtons(course, index + 3)}
              </div>
            </div>
          ))}
        </div>

        {/* Third Row */}
        <div
          className="d-flex flex-row flex-nowrap mt-5 scroll-section"
          id={styles.thirdRow}
        >
          {data.courses.slice(6, 9).map((course, index) => (
            <div
              key={index}
              className={`${styles.courseItem} mx-1 col-12 col-md-4 col-lg-3`}
            >
              <div
                className={`${styles.front} d-flex flex-column justify-content-center align-items-center`}
              >
                <h2
                  className="pt-5 mb-0 pb-0 text-center"
                  id={styles.arabCalligraphy}
                >
                  {course.arabicTitle}
                </h2>
                <h2 className="pt-5 mb-0 pb-0 text-center">{course.title}</h2>
              </div>

              <div
                className={`${styles.back} d-flex flex-column justify-content-center`}
              >
                <p className="mx-5 my-3" style={{ whiteSpace: "pre-line" }}>{t(`content.arabicCourses.courses.${index + 6}.description`)}</p>
                {renderCourseButtons(course, index + 6)}
              </div>
            </div>
          ))}
        </div>

        {/* Fourth Row */}
        <div
          className="d-flex flex-row flex-nowrap mt-5 scroll-section"
          id={styles.fourthRow}
        >
          {data.courses.slice(9, 12).map((course, index) => (
            <div
              key={index}
              className={`${styles.courseItem} mx-1 col-12 col-md-4 col-lg-3`}
            >
              <div
                className={`${styles.front} d-flex flex-column justify-content-center align-items-center`}
              >
                <h2
                  className="pt-5 mb-0 pb-0 text-center"
                  id={styles.arabCalligraphy}
                >
                  {course.arabicTitle}
                </h2>
                <h2 className="pt-5 mb-0 pb-0 text-center">{course.title}</h2>
              </div>

              <div
                className={`${styles.back} d-flex flex-column justify-content-center`}
              >
                <p className="mx-5 my-3" style={{ whiteSpace: "pre-line" }}>{t(`content.arabicCourses.courses.${index + 9}.description`)}</p>
                {renderCourseButtons(course, index + 9)}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
}

export default Courses;
