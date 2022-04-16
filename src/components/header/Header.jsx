import AddCompetitor from "../addCompetitor/AddCompetitor";
import CompetitorsTable from "../CompetitorsTable/CompetitorsTable";
import { useState } from "react";
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
            <table className="compTable">
                <tbody className="compTableBody">
                    <CompetitorsTable data={competitor} />
                </tbody>
            </table>
        </>
    )
}

export default Header