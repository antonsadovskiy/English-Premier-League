import React from "react";
import set from "./Table.module.css";

import GoalScorers from "./Goals/GoalScorers";
import Assists from "./Assists/Assists";
import MainTable from "./MainTable/MainTable";
import {Route, Routes} from "react-router-dom";
import NavTable from "./NavTable/NavTable";
const Table = () => {
    return (
        <div className={set.container}>
            <NavTable/>
            <div className={set.content}>
                <Routes>
                    <Route path="table/teamTable" element={<MainTable/>}/>
                    <Route path="table/goalsTable" element={<GoalScorers/>}/>
                    <Route path="table/assistsTable" element={<Assists/>}/>
                </Routes>
            </div>
        </div>

    )
}

export default Table;