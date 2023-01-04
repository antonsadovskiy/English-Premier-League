import Liverpool from "../../src/assets/badges/Liverpool.png"
import ManCity from "../../src/assets/badges/ManCity.png"
import Arsenal from "../../src/assets/badges/Arsenal.png"
import Tottenham from "../../src/assets/badges/Tottenham.png"
import Chelsea from "../../src/assets/badges/Chelsea.png"
import ManU from "../../src/assets/badges/ManU.png"
import AstonVilla from "../../src/assets/badges/AstonVilla.png"
import Newcastle from "../../src/assets/badges/NewcastleUnited.png"

let state = {
    // Array of matches for Match Day component ***
    MatchDaysPage: {
        matchesData: [
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
        ],
        dateData: [
            {month: "March", day: 18},
        ]
    },
    // Array of teams statistics for Table component ***
    TablePage: {
        teamsStatsData: [
            {position: 1, badge: Liverpool, name: "Liverpool", games: 15, wins: 12, draws: 3, loses: 0, gd: "40:14", points: 43},
            {position: 2, badge: ManCity, name: "Manchester City", games: 15, wins: 11, draws: 3, loses: 1, gd: "22:41", points: 40},
            {position: 3, badge: ManU, name: "Manchester United", games: 15, wins: 10, draws: 4, loses: 1, gd: "23:13", points: 34},
            {position: 4, badge: Arsenal, name: "Arsenal", games: 15, wins: 8, draws: 2, loses: 4, gd: "32:11", points: 30},
            {position: 5, badge: AstonVilla, name: "AstonVilla", games: 15, wins: 9, draws: 0, loses: 4, gd: "32:11", points: 25},
            {position: 6, badge: Newcastle, name: "Newcastle", games: 15, wins: 12, draws: 1, loses: 4, gd: "32:11", points: 24},
            {position: 7, badge: Tottenham, name: "Tottenham", games: 15, wins: 10, draws: 2, loses: 2, gd: "32:11", points: 22},
            {position: 8, badge: Chelsea, name: "Chelsea", games: 15, wins: 8, draws: 1, loses: 3, gd: "12:28", points: 20},
        ]
    }
}

export default state;