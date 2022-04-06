import React from 'react'
import classes from './Friend.module.css'


const Friend = () => {
    return (
        <div className={classes.friend}>
            <img className={classes.friend_ava} src="https://sun9-62.userapi.com/impg/RoTxTOzziGcDc17xXUGheQxtoQYov9Er0InZcg/lGYqdbZFBus.jpg?size=828x762&quality=95&sign=f59267fc618082854cef40997bc3001b&type=album" alt="" />
            <div className={classes.friend_name}>
                <a>Елизавета Позднякова </a>
            </div>
        </div>
    )
}

export default Friend;