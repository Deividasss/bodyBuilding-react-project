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

    const deleteRecordHndler = (index) => {
        const copyData = { ...record }
        copyData.record.splice(index, 1)
        setRecord(copyData)
    }


    return (
        <>
            <AddRecord onSave={saveRecordHandler} />
            <table className="compTable">
                <tbody className="compTableBody">
                    <RecordsTable data={record} delete={deleteRecordHndler} />
                </tbody>
            </table>
            <div className="spacer2"></div>
        </>
    )
}

export default Header