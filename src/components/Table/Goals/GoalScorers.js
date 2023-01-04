import React from "react";
import set from "./GoalScorers.module.css";
import Team from "../MainTable/Team/Team";
import Player from "./Player/Player";

const GoalScorers = (props) => {

    let players = props.state.playerStatsData.map(item =>
        (<Player pos={item.position} club={item.club} name={item.name} country={item.country} goals={item.goals} assists={item.assists}/>))
    debugger;
    return (
        <div className={set.table}>
            {/*<NavMainTable/>*/}
            {players}
        </div>
    )
}

export default GoalScorers;