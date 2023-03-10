export const StatsLine = (props) => (
    <>
        <td>{props.text}</td>
        <td>{props.value ? props.value : 0}</td>
    </>
)