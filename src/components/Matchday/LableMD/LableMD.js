import set from "./LableMD.module.css";

const LableMD = (props) => {

    let date = props.state.map(item => <h2>{item.month} {item.day}</h2>)

    debugger;
    return (
        <div className={set.MD}>
            {date}
        </div>
    )
}

export default LableMD;