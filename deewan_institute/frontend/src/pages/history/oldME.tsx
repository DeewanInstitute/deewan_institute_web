import { useEffect, Fragment } from "react";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import HistoryLayout from "../../layout/historylayout/historyLayout";
import { oldHistory } from "../../../data/oldHistory";
import FloatingActionButton from "../../components/floatingbutton/floatingactionbutton";




function OldME() {
    useEffect(() => {
        document.title = 'History of the Middle East';
    }, []);


    return (
        <Fragment>
            <FloatingActionButton />
            {/* NavBar */}
            <NavBar />
            {/* Main Layout */}
            <HistoryLayout data={oldHistory} />
            {/* Footer */}
            <Footer />
        </Fragment>
    )
}

export default OldME; 