import set from "./Match.module.css";
import About from "./Teams/About/About";
const Match = (props) => {
    return (
        <div className={set.match}>
            <div className={set.place_and_time_wrapper}>
                <p className={set.place}>{props.stadium}</p>
                <p className={set.time}>{props.time}</p>
            </div>
            <div className={set.game_wrapper}>
                <About homeTeamTablePlace={props.homeTeamTablePlace}
                       homeTeamManager={props.homeTeamManager}/>
                <div className={set.team_wrapper}>
                    <div className={set.home_team}>
                        <img src={props.homeTeam} alt="teamLogo"/>
                    </div>
                    <div className={set.versus}>
                        <p>-</p>
                    </div>
                    <div className={set.away_team}>
                        <img src={props.awayTeam} alt="teamLogo"/>
                    </div>
                </div>
                <About awayTeamTablePlace={props.awayTeamTablePlace}
                       awayTeamManager={props.awayTeamManager}/>
            </div>
        </div>
    )
}

export default Match;