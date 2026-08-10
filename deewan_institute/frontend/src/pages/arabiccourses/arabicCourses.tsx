import { Fragment, useEffect } from "react";
import Banner from "../../components/banner/banner";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer"
import Courses from "../../layout/courseslayout/courses";
import courseData from "../../../data/arabicCourses"
import { useScrollAnimation } from '../../../hooks/scrollAnimations';
import '../../style/animation.scss';
import "bootstrap"
import FloatingActionButton from "../../components/floatingbutton/floatingactionbutton";
import FloatingActionButtonInstitute from "../../components/floatingbutton/floatingactionbuttoninstitute";
import { useTranslation } from "react-i18next";

function ArabicCourses() {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = 'Arabic Courses';
    }, []);

    useScrollAnimation();


    return (
        <Fragment>
            {/* Navbar */}
            <NavBar />
            <FloatingActionButton />
            <FloatingActionButtonInstitute />
            {/* Banner */}
            <Banner data={{
                title: t("pages.arabiccourses.arabicCourses.title_arabic_courses"),
                description: t("pages.arabiccourses.arabicCourses.description_check_out_all_our_arabic_courses_at_deewan_"),
                backgroundImg: "../assets/images/banner/arabicCbanner.webp",
            }} />
            {/* Main Layout */}
            <Courses data={courseData} />
            {/* Footer */}
            <Footer />
        </Fragment>
    )
}

export default ArabicCourses; 
