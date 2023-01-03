import React from "react";
import set from "./NavMainTable.module.css";
const NavMainTable = (props) => {
    return (
        <div className={set.navigation}>
            <div className={set.pos_badge_name}>
                <div>#</div>
                <div>Team</div>
            </div>
            <div className={set.stats}>
                <div className={set.G_W_D_L}>G</div>
                <div className={set.G_W_D_L}>W</div>
                <div className={set.G_W_D_L}>D</div>
                <div className={set.G_W_D_L}>L</div>
                <div className={set.goals}>S:C</div>
                <div className={set.point}>P</div>
            </div>

        </div>
    )
}

export default NavMainTable;