import set from "./LableMD.module.css";

const LableMD = (props) => {
    return (
        <div className={set.MD}>
            <h2> {props.month} {props.day}</h2>
        </div>
    )
}

export default LableMD;