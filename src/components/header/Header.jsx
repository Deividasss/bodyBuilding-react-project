import AddCompetitor from "../addCompetitor/AddCompetitor";
import CompetitorsTable from "../CompetitorsTable/CompetitorsTable";
import { useState } from "react";
import "../Sass/CompetitorsTable.scss"
import { Card } from "react-bootstrap";


const Header = () => {
    const [competitor, setCompetitor] = useState([])

    const saveCompetitorHandler = (data) => {
        setCompetitor((prevData) => {
            return [data, ...prevData]

        })
    }

    return (
        <>
            <AddCompetitor  onSave={saveCompetitorHandler} />
            <Card className="compTable">
                    <CompetitorsTable data={competitor} />
            </Card>
        </>
    )
}

export default Header