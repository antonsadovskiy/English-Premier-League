import React from "react";
import set from "./Matches.module.css";
import Match from "./Match/Match";

const Matches = (props) => {

    // variable to store the new array
    let matches = props.state.matchesData.map(item =>
        <Match stadium={item.stadium} time={item.time}
                homeTeam={item.homeTeam} homeTeamManager={item.homeTeamManager}
                homeTeamTablePlace={item.homeTeamTablePlace}
                awayTeam={item.awayTeam} awayTeamManager={item.awayTeamManager}
                awayTeamTablePlace={item.awayTeamTablePlace}
        />)

    return (
        <div className={set.matches}>
            {matches}
        </div>
    )
}
// matches are added to this component !!
export default Matches;