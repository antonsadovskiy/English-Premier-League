import React from "react";
import set from "./NavTable.module.css";
import {NavLink} from "react-router-dom";
const NavTable = () => {
    return (
        <div className={set.nav}>
            <div className={set.teamTable}>
                <NavLink className={navItem => navItem.isActive ? set.active : set.item} to="table/teamTable">
                    Table
                </NavLink>
            </div>
            <div className={set.scorersTable}>
                <NavLink className={navItem => navItem.isActive ? set.active : set.item} to="table/goalsTable">
                    Top Scorers
                </NavLink>
            </div>
            <div className={set.assistsTable}>
                <NavLink className={navItem => navItem.isActive ? set.active : set.item} to="table/assistsTable">
                    Top Assists
                </NavLink>
            </div>
        </div>
    )
}

export default NavTable;