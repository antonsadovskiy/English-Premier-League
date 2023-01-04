import set from "./TablePlace.module.css"
const TablePlace = (props) => {
    return (
        <div className={set.item}>
            <p>Place: {props.homeTeamTablePlace}{props.awayTeamTablePlace} </p>
        </div>
    )
}

export default TablePlace;