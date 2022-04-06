import React from 'react';
import classes from './Header.module.css';
import Info from './Profile_info/Info/Info.jsx';
import Photos from './Profile_info/Photos/Photos.jsx';
import AccountFill from './Profile_info/AccountFill/AccountFill.jsx'


const Header = () => {
    return (
        <header className={classes.header}>
            <span className={classes.span}>online</span>
            <Info />
            <Photos />
            <AccountFill />
        </header>
    )
}

export default Header