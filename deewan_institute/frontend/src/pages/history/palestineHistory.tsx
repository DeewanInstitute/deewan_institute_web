import { useEffect, Fragment } from "react";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import HistoryLayout from "../../layout/historylayout/historyLayout";
import { palestineHistory } from "../../../data/palestineHistory";
import FloatingActionButton from "../../components/floatingbutton/floatingactionbutton";




function PalestineHistory() {
    useEffect(() => {
        document.title = 'The Zionist Project in Palestine';
    }, []);


    return (
        <Fragment>
            <FloatingActionButton />
            {/* NavBar */}
            <NavBar />
            {/* Main Layout */}
            <HistoryLayout data={palestineHistory} />
            {/* Footer */}
            <Footer />
        </Fragment>
    )
}

export default PalestineHistory; 