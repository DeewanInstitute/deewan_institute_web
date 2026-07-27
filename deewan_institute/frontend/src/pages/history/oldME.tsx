import { useEffect, Fragment } from "react";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import HistoryLayout from "../../layout/historylayout/historyLayout";
import { oldHistory } from "../../../data/oldHistory";
import FloatingActionButton from "../../components/floatingbutton/floatingactionbutton";
import FloatingActionButtonInstitute from "../../components/floatingbutton/floatingactionbuttoninstitute";




function OldME() {
    useEffect(() => {
        document.title = 'History of the Middle East';
    }, []);


    return (
        <Fragment>
            <FloatingActionButton />
            <FloatingActionButtonInstitute />
            {/* NavBar */}
            <NavBar />
            {/* Main Layout */}
            <HistoryLayout data={oldHistory} translationRoot="content.history.ancient" />
            {/* Footer */}
            <Footer />
        </Fragment>
    )
}

export default OldME; 
