import { useEffect, Fragment } from "react";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import HistoryLayout from "../../layout/historylayout/historyLayout";
import { peopleHistory } from "../../../data/peopleHistory";
import FloatingActionButton from "../../components/floatingbutton/floatingactionbutton";
import FloatingActionButtonInstitute from "../../components/floatingbutton/floatingactionbuttoninstitute";




function PeopleOfME() {
    useEffect(() => {
        document.title = 'People of the Middle East';
    }, []);

    return (
        <Fragment>
          <FloatingActionButton />
            <FloatingActionButtonInstitute />

            {/* NavBar */}
            <NavBar />
            {/* Main Layout */}
            <HistoryLayout data={peopleHistory} translationRoot="content.history.people" />
            {/* Footer */}
            <Footer />
        </Fragment>
    )
}

export default PeopleOfME; 
