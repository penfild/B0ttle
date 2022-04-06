import React from "react";
import classes from './Ava.module.css';

const Ava = () => {
    return (
        <section className={classes.Ava}>
            <p className={classes.acc_id}>@chrevougodnechek</p>
            <img className={classes.Avatar} src="https://i.ytimg.com/vi/rxumDo4Z6PY/maxresdefault.jpg" alt="lol" width='100' height='100' />
            <div className={classes.button}>Взять на работу</div>
            <div className={classes.button}>Добавить в друзья</div>
        </section>
    )
}

export default Ava;