import AddCompetitor from "../addCompetitor/AddCompetitor";
import CompetitorsTable from "../CompetitorsTable/CompetitorsTable";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";


const Header = () => {
    const [competitor, setCompetitor] = useState([])

    const saveCompetitorHandler = (data) => {
        setCompetitor((prevData) => {
            return [data, ...prevData]

        })
    }

    return (
        <>
            <AddCompetitor onSave={saveCompetitorHandler} />
            <Card>
                <Card.Body>
                    <CompetitorsTable data={competitor} />
                </Card.Body>
            </Card>
        </>
    )
}

export default Header