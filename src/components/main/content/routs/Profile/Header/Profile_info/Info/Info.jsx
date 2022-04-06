import React from "react";
import classes from './Info.module.css';
import Ava from './Avatar/Ava.jsx';
import MainInfo from './Main_info/Main_info.jsx'

const Info = () => {
    return (
        <div className={classes.wrapperInfo}>
            <Ava />
            <MainInfo />
        </div>
    )
}

export default Info;