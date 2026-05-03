import { useEffect, Fragment } from "react";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import HistoryLayout from "../../layout/historylayout/historyLayout";
import { peopleHistory } from "../../../data/peopleHistory";
import FloatingActionButton from "../../components/floatingbutton/floatingactionbutton";




function PeopleOfME() {
    useEffect(() => {
        document.title = 'People of the Middle East';
    }, []);

    return (
        <Fragment>
          <FloatingActionButton />

            {/* NavBar */}
            <NavBar />
            {/* Main Layout */}
            <HistoryLayout data={peopleHistory} />
            {/* Footer */}
            <Footer />
        </Fragment>
    )
}

export default PeopleOfME; 