import React from "react";
import set from "./Matches.module.css";
import Match from "./Match/Match";

import ManCity from "../../../assets/badges/ManCity.png"
import Liverpool from "../../../assets/badges/Liverpool.png";
import Arsenal from "../../../assets/badges/Arsenal.png";
import ManU from "../../../assets/badges/ManU.png";
import Tottenham from "../../../assets/badges/Tottenham.png";
import Chelsea from "../../../assets/badges/Chelsea.png";
import Newcastle from "../../../assets/badges/NewcastleUnited.png";
import AstonVilla from "../../../assets/badges/AstonVilla.png";

const Matches = (props) => {

    // future server ***
    let matchesData = [
        {id: 1, time: "20:00", stadium: "Anfield Stadium",
            homeTeam: Liverpool, homeTeamManager: "Jurgen Klopp", homeTeamTablePlace: 1,
            awayTeam: ManCity, awayTeamManager: "Pep Guardiola", awayTeamTablePlace: 2},
        {id: 2, time: "21:00", stadium: "Emirates Stadium",
            homeTeam: Arsenal, homeTeamManager: "Mickel Arteta", homeTeamTablePlace: 3,
            awayTeam: Tottenham, awayTeamManager: "Antonio Konte", awayTeamTablePlace: 4},
        {id: 3, time: "22:30", stadium: "Stamford Bridge",
            homeTeam: Chelsea, homeTeamManager: "Graham Potter", homeTeamTablePlace: 8,
            awayTeam: ManU, awayTeamManager: "Erik ten Hag", awayTeamTablePlace: 5},
        {id: 4, time: "18:00", stadium: "Villa Park",
            homeTeam: AstonVilla, homeTeamManager: "Unai Emery", homeTeamTablePlace: 9,
            awayTeam: Newcastle, awayTeamManager: "Eddie Howe", awayTeamTablePlace: 10},
    ]
    // ***

    let matches = matchesData.map(item =>
        (<Match stadium={item.stadium} time={item.time}
                homeTeam={item.homeTeam} homeTeamManager={item.homeTeamManager}
                homeTeamTablePlace={item.homeTeamTablePlace}
                awayTeam={item.awayTeam} awayTeamManager={item.awayTeamManager}
                awayTeamTablePlace={item.awayTeamTablePlace}
        />))

    return (
        <div className={set.matches}>
            {matches}
        </div>
    )
}
// matches are added to this component !!
export default Matches;