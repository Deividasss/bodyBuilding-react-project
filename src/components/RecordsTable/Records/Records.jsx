

const Records = (props) => {
    return (
        <>
            <tr>
                <td>{props.name}</td>
                <td>{props.team}</td>
                <td>{props.category}</td>
                <td>{props.record}</td>
            </tr>
        </>
    )
}

export default Records