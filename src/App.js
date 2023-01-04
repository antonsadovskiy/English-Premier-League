import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import MatchDay from "./components/Matchday/MatchDay";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Table from "./components/Table/Table";
import News from "./components/News/News";
import state from "./redux/state";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header/>
                <Nav/>
                <div className="content">
                    <Routes>
                        <Route path="/matchday/*" element={<MatchDay state={props.state.MatchDaysPage}/>}/>
                        <Route path="/table/*" element={<Table state={props.state.TablePage}/>}/>
                        <Route path="/news/*" element={<News/>}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
