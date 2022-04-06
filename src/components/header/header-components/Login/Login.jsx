import React from 'react'
import classes from './Login.module.css'

const Login = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <img className={classes.lol} src="https://i.ytimg.com/vi/rxumDo4Z6PY/maxresdefault.jpg" alt="lol" width='40px' />
                <a href="#" className={classes.Login}> Выйти</a>
            </div>
        </div>
    )
}

export default Login