import Competitors from "../Competitors/Competitors"
import { Table } from "react-bootstrap"

const CompetitorsTable = (props) => {
    return (
        <> <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Vardas</th>
                    <th>Pavardė</th>
                    <th>El. paštas</th>
                    <th>Grupė</th>
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