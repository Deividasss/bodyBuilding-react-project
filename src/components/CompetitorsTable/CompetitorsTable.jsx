import Competitors from "../Competitors/Competitors"
import { Table } from "react-bootstrap"
import "../Sass/CompetitorsTable.scss"

const CompetitorsTable = (props) => {
    return (
        <> <table class="table table-striped">
            <thead class="compTableBody">
                <tr>
                    <th scope="col">Name/ Last name</th>
                    <th scope="col">Team</th>
                    <th scope="col">Category</th>
                    <th scope="col">Record</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((comp, i) => {
                    return (<Competitors
                        key={i}
                        id={comp.id}
                        name={comp.name}
                        team={comp.team}
                        category={comp.category}
                        record={comp.record}
                    />)
                })
                }
            </tbody>
        </table></>
    )
}

export default CompetitorsTable