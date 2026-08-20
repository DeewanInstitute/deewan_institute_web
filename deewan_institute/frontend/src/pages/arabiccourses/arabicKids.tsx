import { Fragment, useEffect } from "react";
import NavBar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import ShadowBanner from '../../components/shadowbanner/shadowbanner';
import { useScrollAnimation } from '../../../hooks/scrollAnimations';
import style from './arabicKids.module.scss';
import '../../style/animation.scss';
import 'bootstrap';
import BottomBanner from "../../components/bottombanner/bottombanner";
import FloatingActionButton from "../../components/floatingbutton/floatingactionbutton";
import FloatingActionButtonInstitute from "../../components/floatingbutton/floatingactionbuttoninstitute";
import { useTranslation } from "react-i18next";
import HeroTitle from "../../components/herotitle/herotitle";

function ArabicKids() {
    const { t } = useTranslation();
    useEffect(() => {
        document.title = 'Arabic For Kids';
    }, []);

    useScrollAnimation();

    return (
        <Fragment>
            {/* NavBar */}
            <NavBar />
            <FloatingActionButton />
            <FloatingActionButtonInstitute />
            
            {/* Banner */}
            <ShadowBanner
                    data={{
                    title: t("pages.arabiccourses.arabicKids.text_arabic_for_kids"),
                    backgroundImg: "../assets/images/banner/arabic-for-kids-banner.webp",
                    rgbColor: "119, 82, 34, 0.55",
                    titleBgColor: "209, 119, 64",
                    }}
                />
            {/* About Section */}
            <div className={style.arabicKids}>
                <main>
                    {/* Title */}
                        <HeroTitle
                            subtitle={t("pages.arabiccourses.arabicKids.text_arabic_for_kids")}
                            title={t("pages.arabiccourses.arabickids.make_arabic_a_language_they_love")}
                            color="rgb(209 119 64)"
                          />
                    
                    {/* About Section */}
                    <section className={`${style.info} py-3 my-4 my-md-5 scroll-section`}>
                        <div className="container">
                            <div className="row justify-content-center align-items-center g-4 g-md-5">
                                {/* Photo collage */}
                                <div className="col-12 col-md-9 col-lg-7">
                                    <div className={style.collage}>
                                        <img
                                            className={style.collageMain}
                                            alt={t("pages.arabiccourses.arabicKids.text_arabic_for_kids")}
                                            src={"../assets/images/others/arabic-for-kids-img.webp"}
                                        />
                                        <img
                                            className={style.collageTop}
                                            alt={t("pages.arabiccourses.arabicKids.text_arabic_for_kids")}
                                            src="/assets/images/shapes/hero-collage-top.svg"
                                        />
                                        <img
                                            className={style.collageBottom}
                                            alt={t("pages.arabiccourses.arabicKids.text_arabic_for_kids")}
                                            src="/assets/images/shapes/hero-collage-bottom.svg"
                                        />
                                    </div>
                        <img
                            aria-hidden="true"
                            src="/assets/images/shapes/circle-orange.svg"
                            alt=""
                            className={`${style.shape} ${style.shapeImg} ${style.shapeWayTopCenter}`}
                        />
                                                <img
                            aria-hidden="true"
                            src="/assets/images/shapes/squiggly-orange.svg"
                            alt=""
                            className={`${style.shape} ${style.shapeImg} ${style.orangeBallLeft}`}
                        />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Scalloped transition into the orange band */}
                    <svg aria-hidden="true" className={style.scallop} viewBox="0 0 1440 160" preserveAspectRatio="none">
                        {[0, 1, 2, 3, 4, 5].map((i) => (
                            <circle key={i} cx={i * 290} cy="180" r="180" />
                        ))}
                    </svg>

                    {/* Learn Arabic Their Way */}
                    <section className={`${style.learnWay} scroll-section`}>
                        <img
                            aria-hidden="true"
                            src="/assets/images/shapes/circle-white-small.svg"
                            alt=""
                            className={`${style.shape} ${style.shapeImg} ${style.shapeWayTopLeft}`}
                        />
                        <img
                            aria-hidden="true"
                            src="/assets/images/shapes/circle-white-large.svg"
                            alt=""
                            className={`${style.shape} ${style.shapeImg} ${style.shapeWayTopRight}`}
                        />

                        <img
                            aria-hidden="true"
                            src="/assets/images/shapes/squiggly-white.svg"
                            alt=""
                            className={`${style.shape} ${style.shapeImg} ${style.shapeWayBottomRight}`}
                        />
                        <div className="container">
                            <div className={style.learnWayTitle}>
                                <h1>{t("pages.arabiccourses.arabicKids.text_learn_arabic_their_way")}</h1>
                            </div>
                            <p>{t("pages.arabiccourses.arabicKids.text_our_program_offers_private_one_to_one_lessons_and")}</p>
                            <p>{t("pages.arabiccourses.arabicKids.text_parents_can_choose_between")}</p>
                            <ul>
                                <li>
                                    <strong>{t("pages.arabiccourses.arabicKids.label_modern_standard_arabic_msa")}</strong>
                                    {t("pages.arabiccourses.arabicKids.text_ideal_for_developing_formal_arabic_skills_used_in")}
                                </li>
                                <li>
                                    <strong>{t("pages.arabiccourses.arabicKids.label_colloquial_arabic")}</strong>
                                    {t("pages.arabiccourses.arabicKids.text_focused_on_everyday_communication_and_helping_chil")}
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* More Than Learning a Language */}
                    <section className={style.approach}>
                        <img
                            aria-hidden="true"
                            src="/assets/images/shapes/squiggly-orange.svg"
                            alt=""
                            className={`${style.shape} ${style.shapeImg} ${style.orangeBallLeft2}`}
                        />
                        <img
                            aria-hidden="true"
                            src="/assets/images/shapes/squiggly-orange.svg"
                            alt=""
                            className={`${style.shape} ${style.shapeImg} ${style.orangeBallRight}`}
                        />
                        <div className={`${style.subTitle} my-4 my-md-5`}>
                            <h1 className="py-2 scroll-section slide-in-right">{t("pages.arabiccourses.arabicKids.text_more_than_learning_a_language")}</h1>
                        </div>
                        <div className="container">
                            <p className={`${style.montessoriText} scroll-section`}>
                                {t("pages.arabiccourses.arabicKids.text_at_deewan_institute_we_use_the_montessori_approach")}</p>
                        </div>
                        <div className="container">
                            <div className="row justify-content-center text-center mx-auto my-4 my-md-5 py-4 py-md-5 scroll-section slide-in-left g-4">
                                {/* Item 1 */}
                                <div className="col-12 col-sm-6 col-md-4">
                                    <div id={style.itemBox}>
                                        <img 
                                            src={"../assets/images/others/approach1.webp"} 
                                            alt={t("pages.arabiccourses.arabicKids.text_play_and_learn")} 
                                            className="img-fluid"
                                            style={{ maxWidth: '200px', width: '100%', height: 'auto' }}
                                        />
                                        <h2 className="py-3 py-md-4">{t("pages.arabiccourses.arabicKids.text_play_and_learn")}</h2>
                                    </div>
                                </div>
                                {/* Item 2 */}
                                <div className="col-12 col-sm-6 col-md-4">
                                    <div id={style.itemBox}>
                                        <img 
                                            src={"../assets/images/others/approach2.webp"} 
                                            alt={t("pages.arabiccourses.arabicKids.text_stories_that_inspire_imagination")} 
                                            className="img-fluid"
                                            style={{ maxWidth: '200px', width: '100%', height: 'auto' }}
                                        />
                                        <h2 className="py-3 py-md-4">{t("pages.arabiccourses.arabicKids.text_stories_that_inspire_imagination")}</h2>
                                    </div>
                                </div>
                                {/* Item 3 */}
                                <div className="col-12 col-sm-6 col-md-4">
                                    <div id={style.itemBox}>
                                        <img 
                                            src={"../assets/images/others/approach3.webp"} 
                                            alt={t("pages.arabiccourses.arabicKids.text_interactive_visual_learning")} 
                                            className="img-fluid"
                                            style={{ maxWidth: '200px', width: '100%', height: 'auto' }}
                                        />
                                        <h2 className="py-3 py-md-4">{t("pages.arabiccourses.arabicKids.text_interactive_visual_learning")}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    {/* Bottom Banner */}
                    <BottomBanner
                        data={{
                            mainText: t("pages.arabiccourses.arabicKids.maintext_enroll_your_child_in_arabic_today"),
                            buttonText: t("pages.arabiccourses.arabicKids.buttontext_sign_up"),
                            primaryColor: "#000000",
                            backgroundImg: "../assets/images/banner/kids-bottom-banner.webp",
                        }}
                    />
                </main>
            </div>
            
            {/* Footer */}
            <Footer />
        </Fragment>
    );
}

export default ArabicKids;
