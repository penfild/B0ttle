import React from "react";
import classes from './Header.module.css';
import Logo from './header-components/Logo/Logo.jsx';
import Header_links from "./header-components/Links/Links.jsx";
import Login from './header-components/Login/Login.jsx'



const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.wrapper}>
                <div className={classes.logo}>
                    <Logo />
                    <Header_links />
                </div>
                <Login />
            </div>
        </header>
    )
}



export default Header;