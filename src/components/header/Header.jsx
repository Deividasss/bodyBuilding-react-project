import AddCompetitor from "../addCompetitor/AddCompetitor";
import CompetitorsTable from "../CompetitorsTable/CompetitorsTable";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import "../Sass/CompetitorsTable.scss"


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
            <Card className="pagrindinis1">
                <Card.Body>
                    <CompetitorsTable data={competitor} />
                </Card.Body>
            </Card>
        </>
    )
}

export default Header