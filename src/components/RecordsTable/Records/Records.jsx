

const Records = (props) => {
    return (
        <>
            <tr>
                <td>{props.name}</td>
                <td>{props.team}</td>
                <td>{props.category}</td>
                <td>{props.record}</td>
                <td><button>Delete</button></td>
            </tr>
        </>
    )
}

export default Records