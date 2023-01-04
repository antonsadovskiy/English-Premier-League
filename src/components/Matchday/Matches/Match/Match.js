import set from "./Match.module.css";
import About from "./Teams/About/About";
import Teams from "./Teams/Teams";

const Match = (props) => {
    return (
        <div className={set.match}>
            <div className={set.place_and_time_wrapper}>
                <p className={set.place}>{props.stadium}</p>
                <p className={set.time}>{props.time}</p>
            </div>
            <div className={set.game_wrapper}>
                <About homeTeamTablePlace={props.homeTeamTablePlace} homeTeamManager={props.homeTeamManager}/>
                <Teams homeTeam={props.homeTeam} awayTeam={props.awayTeam}/>
                <About awayTeamTablePlace={props.awayTeamTablePlace} awayTeamManager={props.awayTeamManager}/>
            </div>
        </div>
    )
}

export default Match;