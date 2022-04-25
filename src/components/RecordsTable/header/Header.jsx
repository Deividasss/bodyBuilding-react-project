import AddRecord from "../addRecord/AddRecord";
import RecordsTable from "../RecordsTable/RecordsTable";
import { useState } from "react";
import "../../Sass/CompetitorsTable.scss"


const Header = () => {
    const [record, setRecord] = useState([])

    const saveRecordHandler = (data) => {
        setRecord((prevData) => {
            return [data, ...prevData]

        })
    }


    return (
        <>
            <AddRecord onSave={saveRecordHandler} />
            <table className="compTable">
                <tbody className="compTableBody">
                    <RecordsTable data={record} />
                </tbody>
            </table>
            <div className="spacer2"></div>
        </>
    )
}

export default Header