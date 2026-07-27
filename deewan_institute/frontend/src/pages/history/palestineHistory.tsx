import { useEffect, Fragment } from "react";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import HistoryLayout from "../../layout/historylayout/historyLayout";
import { palestineHistory } from "../../../data/palestineHistory";
import FloatingActionButton from "../../components/floatingbutton/floatingactionbutton";
import FloatingActionButtonInstitute from "../../components/floatingbutton/floatingactionbuttoninstitute";




function PalestineHistory() {
    useEffect(() => {
        document.title = 'The Zionist Project in Palestine';
    }, []);


    return (
        <Fragment>
            <FloatingActionButton />
            <FloatingActionButtonInstitute />
            {/* NavBar */}
            <NavBar />
            {/* Main Layout */}
            <HistoryLayout data={palestineHistory} translationRoot="content.history.palestine" />
            {/* Footer */}
            <Footer />
        </Fragment>
    )
}

export default PalestineHistory; 
