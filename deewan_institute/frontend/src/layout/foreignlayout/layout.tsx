import { Fragment } from "react/jsx-runtime"
import styles from "./foreigncourse.module.scss"
import { useTranslation } from "react-i18next";

interface Props {
    title: string,
    primaryColor: string,
    rgb: string,
    backgroundImg: string,
    bannerImg: string,
    description: string,
    language: string,
    bottomBannerImg: string,
    bottomBannerTitle: string,
    bottomBannerButtonTitle: string,
    course: Array<{
        name: string
        description: string
        boldDescription?: string
        link: string
    }>
}


function ForeignLayout({ data, translationRoot }: { data: Props; translationRoot: string }) {
    const { t } = useTranslation();
    return (
        <Fragment>
            <main id={styles.layout} style={{
                '--primary-color': data.primaryColor,
                '--primary-color-rgb': data.rgb,
                '--background-image': `url(${data.backgroundImg})`,
                '--banner-image': `url(${data.bannerImg})`
            } as React.CSSProperties}>
                {/* <!-- Banner Image --> */}
                <section className={`${styles.banner} d-flex align-items-center justify-content-center`}>
                    <div className="text-center d-flex flex-column align-items-center justify-content-center" id={styles.para}>
                        <h1 className="display-5 text-white my-4" id={styles.h1}>{t(`${translationRoot}.title`)}</h1>
                    </div>
                </section>
                {/* <!-- End of Banner Image --> */}
                {/* <!-- Title Section --> */}
                <div className={`${styles.title} text-center mx-auto`}>
                    {/* <!-- Title --> */}
                    <h4 className={`${styles.dark} lh-base`}>
                        {t("ui.boost_your_language", {
                            language: t(`${translationRoot}.language`),
                        })}
                    </h4>
                    <h1 className={`${styles.light}`}>{t("layout.foreignlayout.layout.text_with_our_courses")}</h1>
                    {/* <!-- Divider --> */}
                    <hr className="featurette-divider mx-auto my-2 scroll-section" id={styles.featuretteDivider} />
                </div>
                {/* <!-- End of Title Section --> */}
                <div className={`${styles.para} text-center my-5`}>
                    <p style={{ whiteSpace: "pre-line" }}>
                        {t(`${translationRoot}.description`)}
                    </p>
                </div>

                {/* The Test Courses */}
                <section className={`${styles.services} pb-5`}>
                    {/* <!-- First Row of Cards--> */}
                    <div className="d-flex flex-row flex-wrap justify-content-evenly scroll-section gap-4">
                        {data.course.slice(0, 3).map(
                            (course, index) =>
                                <div key={index} className={`${styles.courseItem} mx-1 col-12 col-md-6 col-lg-4`}>
                                    <div className={`${styles.front} d-flex flex-column justify-content-center align-items-center`}>
                                        <h2 className="pt-5 mb-0 pb-0 text-black text-center">{t(`${translationRoot}.courses.${index}.name`)}</h2>
                                    </div>
                                    <div className={`${styles.back} d-flex flex-column justify-content-center align-items-center`}>
                                        <p className="mx-5 text-black text-center py-1" style={{ whiteSpace: "pre-line" }}>{t(`${translationRoot}.courses.${index}.description`)}
                                            <br />
                                            <span className="fw-bold">{course.boldDescription && t(`${translationRoot}.courses.${index}.boldDescription`)}</span>
                                        </p>
                                        <a href={course.link}
                                            className="text-decoration-none rounded-pill w-50 text-center text-white" target="_blank">{t("pages.arabiccourses.arabiTalk.buttontext_sign_up")}</a>
                                    </div>
                                </div>
                        )}
                    </div>
                    {/* <!-- End of First Row of Cards --> */}
                    {/* <!-- Second Row of Cards--> */}
                    <div className="d-flex flex-row flex-wrap justify-content-center scroll-section mt-5 gap-4">
                        {data.course.slice(3, 6).map(
                            (course, index) =>
                                <div key={index} className={`${styles.courseItem} mx-1 col-12 col-md-6 col-lg-4 mx-3`}>
                                    <div className={`${styles.front} d-flex flex-column justify-content-center align-items-center`}>
                                        <h2 className="pt-5 mb-0 pb-0 text-black text-center">{t(`${translationRoot}.courses.${index + 3}.name`)}</h2>
                                    </div>
                                    <div className={`${styles.back} d-flex flex-column justify-content-center align-items-center`}>
                                        <p className="mx-5 text-black text-center py-1" style={{ whiteSpace: "pre-line" }}>{t(`${translationRoot}.courses.${index + 3}.description`)}
                                            <br />
                                            <span className="fw-bold">{course.boldDescription && t(`${translationRoot}.courses.${index + 3}.boldDescription`)}</span>
                                        </p>
                                        <a href={course.link}
                                            className="text-decoration-none rounded-pill w-50 text-center text-white" target="_blank">{t("pages.arabiccourses.arabiTalk.buttontext_sign_up")}</a>
                                    </div>
                                </div>
                        )}
                    </div>
                    {/* <!-- End of Second Row of Cards --> */}
                </section>


                {/* Course Policy */}
                <section className={`${styles.policy} d-flex flex-column`}>
                    <div className={styles.title}>
                        <h3 className="py-2 scroll-section slide-in-left ">{t("layout.foreignlayout.layout.text_course_policy")}</h3>
                    </div>
                    <p className={styles.para}>
                        {t("layout.foreignlayout.layout.text_our_course_policy_ensures_a_smooth_fair_and_enjoya")}</p>
                    <a className="text-decoration-none rounded-pill text-center text-white" href="../assets/pdf/coursePolicyLanguages2.pdf" target="_blank">{t("layout.foreignlayout.layout.text_view_course_policy")}</a>
                </section>

                {/* Bottom Banner */}
                <div className={`${styles.bottomBanner} mb-0 py-5 mt-5`} style={{
                    '--bottom-banner-image': `url(${data.bottomBannerImg})`
                } as React.CSSProperties}>
                    <div className="text-start d-flex flex-row align-items-center justify-content-center">
                        <h2 className="display-5 text-white my-4">{t(`${translationRoot}.bottomBannerTitle`)}</h2>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeGhi5lxeMDlS4P_y7UsuJVPwEXsRqYT0tGNb5oPvpwHSJwfg/viewform"
                            className="text-decoration-none rounded-pill text-center text-white" target="_blank">{t(`${translationRoot}.bottomBannerButtonTitle`)}</a>
                    </div>
                </div>
            </main>
        </Fragment>

    )
}

export default ForeignLayout; 
