

const Competitors = (props) => {
    return (
        <>
            <tr>
                <td>{props.name}</td>
                <td>{props.lastName}</td>
                <td>{props.email}</td>
                <td>{props.group}</td>
            </tr>
        </>
    )
}

export default Competitors