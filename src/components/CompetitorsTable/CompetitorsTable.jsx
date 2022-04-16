import Competitors from "../Competitors/Competitors"
import { Table } from "react-bootstrap"
import "../Sass/CompetitorsTable.scss"

const CompetitorsTable = (props) => {
    return (
        <> <Table className="compTableBody">
            <thead class="compTableBody">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Group</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((comp, i) => {
                    return (<Competitors
                        key={i}
                        id={comp.id}
                        name={comp.name}
                        lastName={comp.lastName}
                        email={comp.email}
                        group={comp.group}
                    />)
                })
                }
            </tbody>
        </Table></>
    )
}

export default CompetitorsTable