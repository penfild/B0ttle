import React from 'react'
import classes from './Messengers.module.css' 
import { NavLink } from 'react-router-dom';

const Messengers = (props) => {
    const someMessage = props.state.messagesInfo.map(s => (
        <NavLink to='/messangerpage' className={classes.message} /* src={s.src} sender={s.sender} user_id={s.user_id} */>
            <div className={classes.message_img_wrapper}>
                <img className={classes.message_img} src={s.sender_ava} alt="img" />
            </div>
            <div className={classes.message_fill}>
                <div className={classes.message_heading}>
                    <p className={classes.message_autor}>{s.sender}</p>
                </div>
                <div className={classes.message_content_wrapper}>
                    <p className={classes.message_content}>
                        {s.message}
                    </p>
                    <p className={classes.message_time}>
                        {s.user_id}
                    </p>
                </div>
            </div>
        </NavLink>
    ));
    return (
        <div className={classes.messengers}>
            { someMessage }
            
        </div>
    )
}

export default Messengers;