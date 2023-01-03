import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import MatchDay from "./components/Matchday/MatchDay";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Table from "./components/Table/Table";
import News from "./components/News/News";

const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header/>
                <Nav/>
                <div className="content">
                    <Routes>
                        <Route path="/matchday/*" element={<MatchDay/>}/>
                        <Route path="/table/*" element={<Table/>}/>
                        <Route path="/news/*" element={<News/>}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
