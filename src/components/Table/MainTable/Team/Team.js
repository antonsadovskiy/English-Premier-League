import React from "react";
import set from "./Team.module.css";
const Team = (props) => {
    return (
        <div className={set.team}>
            <div className={set.pos_badge_name}>
                <div className={set.item}>
                    {props.pos}.
                </div>
                <div className={set.item}>
                    {props.name}
                </div>
            </div>
           <div className={set.stats}>
               <div className={set.item}>
                   {props.games}
               </div>
               <div className={set.item}>
                   {props.gamesWon}
               </div>
               <div className={set.item}>
                   {props.gamesDraw}
               </div>
               <div className={set.item}>
                   {props.gamesLost}
               </div>
               <div className={set.item}>
                   {props.gd}
               </div>
               <div className={set.item}>
                   {props.points}
               </div>
           </div>


        </div>
    )
}

export default Team;