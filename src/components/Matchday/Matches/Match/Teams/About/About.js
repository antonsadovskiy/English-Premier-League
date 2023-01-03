import set from "./About.module.css"
import Manager from "./Manager/Manager";
import TablePlace from "./TablePlace/TablePlace";
import WinStreak from "./WinStreak/WinStreak";

const About = (props) => {
    return (
        <div className={set.stats_wrapper}>
            <WinStreak/>
            <Manager homeTeamManager={props.homeTeamManager}
                     awayTeamManager={props.awayTeamManager}/>
            <TablePlace homeTeamTablePlace={props.homeTeamTablePlace}
                        awayTeamTablePlace={props.awayTeamTablePlace}/>
        </div>
    )
}

export default About;