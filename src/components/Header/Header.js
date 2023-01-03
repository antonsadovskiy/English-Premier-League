import React from "react";
import Logo from "../../assets/logo/EPL-logo.png";
import set from "./Header.module.css";
const Header = () => {
    return (
        <header className={set.header}>
            <img className={set.logoEPL} src={Logo} alt="Logo"/>
            <h2 className={set.slogan}>Work hard. Play harder.</h2>
        </header>
    )
}

export default Header;