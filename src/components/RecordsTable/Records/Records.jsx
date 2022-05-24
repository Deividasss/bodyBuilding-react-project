import { Button } from "react-bootstrap"

const Records = (props) => {
    return (
        <>
            <tr>
                <td>{props.name}</td>
                <td>{props.team}</td>
                <td>{props.category}</td>
                <td>{props.record}</td>
                <td><Button onClick={() => props.delete(props.index)}>Delete</Button></td>
            </tr>
        </>
    )
}

export default Records