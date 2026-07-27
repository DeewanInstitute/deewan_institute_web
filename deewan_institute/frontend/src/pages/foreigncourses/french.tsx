import { useEffect, Fragment } from "react";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import frenchData from '../../../data/french';
import ForeignLayout from "../../layout/foreignlayout/layout";
import { useScrollAnimation } from '../../../hooks/scrollAnimations';
import '../../style/animation.scss';
import 'bootstrap'; 
import FloatingActionButton from "../../components/floatingbutton/floatingactionbutton";
import FloatingActionButtonInstitute from "../../components/floatingbutton/floatingactionbuttoninstitute";


function French() {

    useEffect(() => {
        document.title = 'French Course';
    }, []);

    useScrollAnimation(); 

    return (
        <Fragment>
            <FloatingActionButton />
            <FloatingActionButtonInstitute />
            {/* Navbar */}
            <NavBar />
            {/* Main Layout */}
            <ForeignLayout data={frenchData} translationRoot="content.foreign.french" />
            {/* Footer */}
            <Footer />
        </Fragment>

    )

}

export default French
