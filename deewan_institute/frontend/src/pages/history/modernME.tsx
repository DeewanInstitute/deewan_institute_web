import { useEffect, Fragment } from "react";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import HistoryLayout from "../../layout/historylayout/historyLayout";
import { modernHistory } from "../../../data/modernHistory";
import FloatingActionButton from "../../components/floatingbutton/floatingactionbutton";



function ModernME() {
    useEffect(() => {
        document.title = 'Modern History of the Middle East';
    }, []);


    return (
        <Fragment>
            <FloatingActionButton />
            {/* NavBar */}
            <NavBar />
            {/* Main Layout */}
            <HistoryLayout data={modernHistory} />
            {/* Footer */}
            <Footer />
        </Fragment>
    )
}

export default ModernME; 