import React from "react";
import set from "./MainTable.module.css";
import Team from "./Team/Team";
import NavMainTable from "./NavMainTable/NavMainTable";
const MainTable = (props) => {

    let teamsStatsData = [
        {position: 1, name: "Liverpool", games: 15, wins: 12, draws: 3, loses: 0, gd: "40:14", points: 43},
        {position: 2, name: "Manchester City", games: 15, wins: 11, draws: 3, loses: 1, gd: "22:41", points: 40},
        {position: 3, name: "Manchester United", games: 15, wins: 9, draws: 4, loses: 2, gd: "23:13", points: 34},
        {position: 4, name: "Arsenal", games: 15, wins: 7, draws: 4, loses: 4, gd: "32:11", points: 30},
    ]

    return (
        <div className={set.table}>
            {/*<NavMainTable/>*/}
            <Team pos={teamsStatsData[0].position} name={teamsStatsData[0].name}
                  games={teamsStatsData[0].games} gamesWon={teamsStatsData[0].wins}
                  gamesDraw={teamsStatsData[0].draws} gamesLost={teamsStatsData[0].loses}
                  gd={teamsStatsData[0].gd} points={teamsStatsData[0].points}/>

            <Team pos={teamsStatsData[1].position} name={teamsStatsData[1].name}
                  games={teamsStatsData[1].games} gamesWon={teamsStatsData[1].wins}
                  gamesDraw={teamsStatsData[1].draws} gamesLost={teamsStatsData[1].loses}
                  gd={teamsStatsData[1].gd} points={teamsStatsData[1].points}/>
            <Team pos={teamsStatsData[2].position} name={teamsStatsData[2].name}

                  games={teamsStatsData[2].games} gamesWon={teamsStatsData[2].wins}
                  gamesDraw={teamsStatsData[2].draws} gamesLost={teamsStatsData[2].loses}
                  gd={teamsStatsData[2].gd} points={teamsStatsData[2].points}/>

            <Team pos={teamsStatsData[3].position} name={teamsStatsData[3].name}
                  games={teamsStatsData[3].games} gamesWon={teamsStatsData[3].wins}
                  gamesDraw={teamsStatsData[3].draws} gamesLost={teamsStatsData[3].loses}
                  gd={teamsStatsData[3].gd} points={teamsStatsData[3].points}/>
        </div>
    )
}

export default MainTable;