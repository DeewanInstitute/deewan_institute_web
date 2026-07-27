import { useEffect, Fragment } from "react";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import HistoryLayout from "../../layout/historylayout/historyLayout";
import { modernHistory } from "../../../data/modernHistory";
import FloatingActionButton from "../../components/floatingbutton/floatingactionbutton";
import FloatingActionButtonInstitute from "../../components/floatingbutton/floatingactionbuttoninstitute";



function ModernME() {
    useEffect(() => {
        document.title = 'Modern History of the Middle East';
    }, []);


    return (
        <Fragment>
            <FloatingActionButton />
            <FloatingActionButtonInstitute />
            {/* NavBar */}
            <NavBar />
            {/* Main Layout */}
            <HistoryLayout data={modernHistory} translationRoot="content.history.modern" />
            {/* Footer */}
            <Footer />
        </Fragment>
    )
}

export default ModernME; 
