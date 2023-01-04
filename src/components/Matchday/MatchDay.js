import React from "react";
import BackgroundImage from "./Background/Background";
import Matches from "./Matches/Matches";
import LableMD from "./LableMD/LableMD";

const MatchDay = (props) => {
    // debugger;
    return (
        <div>
            <BackgroundImage/>
            <LableMD state={props.state.dateData}/>
            <Matches state={props.state}/>
        </div>
    )
}
export default MatchDay;