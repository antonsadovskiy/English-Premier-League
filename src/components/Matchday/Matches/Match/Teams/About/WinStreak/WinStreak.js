import set from "./WinStreak.module.css"
import Point from "./Point/Point";
const WinStreak = () => {
    return (
        <div className={set.item}>
            <div className={set.win_streak}>
                <p>Win streak: </p>
                <div className={set.point_wrapper}>
                    <Point/>
                    <Point/>
                    <Point/>
                    <Point/>
                    <Point/>
                </div>
            </div>
        </div>
    )
}

export default WinStreak;