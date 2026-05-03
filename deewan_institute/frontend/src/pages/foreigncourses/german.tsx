import { useEffect, Fragment } from "react";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import germanData from '../../../data/german';
import ForeignLayout from "../../layout/foreignlayout/layout";
import { useScrollAnimation } from '../../../hooks/scrollAnimations';
import '../../style/animation.scss';
import 'bootstrap'
import FloatingActionButton from "../../components/floatingbutton/floatingactionbutton";


function German() {

    useEffect(() => {
        document.title = 'German Course';
    }, []);

    useScrollAnimation();

    return (
        <Fragment>
            <FloatingActionButton />
            {/* Navbar */}
            <NavBar />
            {/* Main Layout */}
            <ForeignLayout data={germanData} />
            {/* Footer */}
            <Footer />
        </Fragment>

    )

}

export default German