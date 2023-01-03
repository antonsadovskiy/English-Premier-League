import React from "react";
import set from "./Nav.module.css";
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={set.navigation}>
            <div className={set.nav_wrap}>
                <NavLink className={navItem => navItem.isActive ? set.active : set.item} to="/matchday">
                    Match days
                </NavLink>
                <NavLink className={navItem => navItem.isActive ? set.active : set.item} to="/table">
                    Table
                </NavLink>
                <NavLink className={navItem => navItem.isActive ? set.active : set.item} to="/news">
                    News
                </NavLink>
            </div>
        </nav>
    )
}

export default Nav;