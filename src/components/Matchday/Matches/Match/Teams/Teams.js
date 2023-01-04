import set from "./Teams.module.css";
const Teams = (props) => {
    return (
        <div className={set.team_wrapper}>
            <div className={set.home_team}>
                <img src={props.homeTeam} alt="team logo"/>
            </div>
            <div className={set.versus}>
                <p>-</p>
            </div>
            <div className={set.away_team}>
                <img src={props.awayTeam} alt="team logo"/>
            </div>
        </div>
    )
}

export default Teams;