import { useEffect, Fragment } from "react";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import englishData from '../../../data/english';
import ForeignLayout from "../../layout/foreignlayout/layout";
import { useScrollAnimation } from '../../../hooks/scrollAnimations';
import '../../style/animation.scss';
import 'bootstrap'
import FloatingActionButton from "../../components/floatingbutton/floatingactionbutton";
import FloatingActionButtonInstitute from "../../components/floatingbutton/floatingactionbuttoninstitute";


function English() {

    useEffect(() => {
        document.title = 'English Course';
    }, []);
    
    useScrollAnimation();

    return (
        <Fragment>
            <FloatingActionButton />
            <FloatingActionButtonInstitute />
            {/* Navbar */}
            <NavBar />
            {/* Main Layout */}
            <ForeignLayout data={englishData} />
            {/* Footer */}
            <Footer />
        </Fragment>

    )

}

export default English