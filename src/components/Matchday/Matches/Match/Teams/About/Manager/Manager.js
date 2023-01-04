import set from "./Manager.module.css"
const Manager = (props) => {
    return (
        <div className={set.item}>
            <p>Manager: {props.homeTeamManager}{props.awayTeamManager}</p>
        </div>
    )
}

export default Manager;