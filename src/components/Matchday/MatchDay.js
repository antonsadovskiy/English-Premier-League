import React from "react";
import BackgroundImage from "./Background/Background";
import Matches from "./Matches/Matches";
import LableMD from "./LableMD/LableMD";
import set from "./MatchDay.module.css";

const MatchDay = () => {
    return (
        <div>
            <BackgroundImage/>
            <LableMD month="January" day="10"/>
            <Matches/>
        </div>
    )
}
export default MatchDay;