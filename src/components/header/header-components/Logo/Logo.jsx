import React from "react";
import classes from './Logo.module.css';

const Logo = () => {
    return (
        <a href="#" className={classes.logo_link}>
            <img src="https://cdn-icons-png.flaticon.com/512/1160/1160774.png?w=1380" alt="logo" width='50' />
        </a>
    )
}

export default Logo;