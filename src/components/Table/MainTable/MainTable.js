import React from "react";
import set from "./MainTable.module.css";
import Team from "./Team/Team";
import NavMainTable from "./NavMainTable/NavMainTable";
const MainTable = (props) => {

    let teams = props.state.teamsStatsData.map(item =>
        (<Team pos={item.position} badge={item.badge} name={item.name} games={item.games} gamesWon={item.wins}
               gamesDraw={item.draws} gamesLost={item.loses} gd={item.gd} points={item.points}
        />))

    return (
        <div className={set.table}>
            {/*<NavMainTable/>*/}
            {teams}
        </div>
    )
}

export default MainTable;