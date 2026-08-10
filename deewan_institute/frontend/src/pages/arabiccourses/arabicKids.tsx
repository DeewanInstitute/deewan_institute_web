import { Fragment, useEffect } from "react";
import NavBar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Title from '../../components/title/title';
import ShadowBanner from '../../components/shadowbanner/shadowbanner';
import Platform from "../../components/platform/platform";
import { useScrollAnimation } from '../../../hooks/scrollAnimations';
import style from '../arabiccourses/arabic.module.scss';
import '../../style/animation.scss';
import 'bootstrap';
import BottomBanner from "../../components/bottombanner/bottombanner";
import FloatingActionButton from "../../components/floatingbutton/floatingactionbutton";
import FloatingActionButtonInstitute from "../../components/floatingbutton/floatingactionbuttoninstitute";
import { useTranslation } from "react-i18next";

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
                    title: "Arabic For Kids",
                    backgroundImg: "/assets/images/banner/kidsBG.webp",
                    rgbColor: "166,10,31"
                }} 
            />
            
            {/* About Section */}
            <div className={style.arabicKids}>
                <main>
                    {/* Title */}
                    <Title 
                        data={{
                            subtitle: "Learn Arabic Playfully!",
                            color: "#A60A1F"
                        }} 
                    />
                    
                    {/* About Section */}
                    <section className={`${style.info} py-3 my-4 my-md-5 scroll-section`}>
                        <div className="container">
                            <div className="row justify-content-center align-items-center g-4 g-md-5">
                                {/* Image - Order 1 on mobile, Order 1 on desktop */}
                                <div className="col-12 col-md-5 d-flex flex-column align-items-center justify-content-center order-1 order-md-1">
                                    <img 
                                        className="img-fluid" 
                                        alt={t("pages.arabiccourses.arabicKids.text_arabic_for_kids")}
                                        src={"../assets/images/others/arabicForKids.webp"} 
                                        style={{ maxWidth: '400px', width: '100%', height: 'auto' }} 
                                    />
                                </div>
                                {/* Text - Order 2 on mobile, Order 2 on desktop */}
                                <div className="col-12 col-md-4 d-flex flex-column align-items-start justify-content-center order-2 order-md-2">
                                    <h5 className="featurette-heading mb-2">{t("pages.arabiccourses.arabicKids.text_arabic_for_kids")}</h5>
                                    <h1 className="featurette-heading my-3">{t("pages.arabiccourses.arabiTalk.text_what_is_it")}</h1>
                                    <p className="lead">
                                        {t("pages.arabiccourses.arabicKids.text_whether_your_child_is_just_starting_or_wants_to_im")}</p>
                                    <p className="lead">
                                        {t("pages.arabiccourses.arabicKids.text_we_teach_both_modern_standard_arabic_msa_or_colloq")}</p>
                                    <ul className="lead">
                                        <li>{t("pages.arabiccourses.arabicKids.text_reading")}</li>
                                        <li>{t("pages.arabiccourses.arabicKids.text_writing")}</li>
                                        <li>{t("pages.arabiccourses.arabicKids.text_speaking")}</li>
                                        <li>{t("pages.arabiccourses.arabicKids.text_listening")}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    {/* Approach Section */}
                    <section className={style.approach}>
                        <div className={`${style.subTitle} my-4 my-md-5`}>
                            <h1 className="py-2 scroll-section slide-in-right">{t("pages.arabiccourses.arabicKids.text_seamless_platforms_for_every_format")}</h1>
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
                    
                    {/* Platforms Section */}
                    <Platform data={{ color: "#A60A1F" }} />
                    
                    {/* Bottom Banner */}
                    <BottomBanner
                        data={{
                            mainText: "Enroll Your Child in Arabic Today!",
                            buttonText: "Enroll Now!",
                            primaryColor: "#A60A1F",
                            backgroundImg: "../assets/images/banner/kidsBBG.webp",
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
