// import logo from './logo.svg';
import React, {Component} from "react";
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Header/>
            <p>Привет, меня зовут Антон</p>
            <p>В этом курсе я буду изучать React JS</p>
            <p>С помощью Димыча</p>
            <p>Надеюсь мне повезет</p>
            <Footer/>
        </div>
    );
}

const Header = () => {
    return (
        <div>
            <h2>Welcome to My first React App</h2>
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <h2>This is footer of my App</h2>
        </div>
    )
}

export default App;
