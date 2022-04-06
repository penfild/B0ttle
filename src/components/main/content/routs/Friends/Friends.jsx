import React from 'react'
import classes from './Friends.module.css'
import Friends_container from './Friends_container/Friends_container.jsx'


const Friends = () => {
    return (
        <div className={classes.friends}>
            <div className={classes.heading}>
                <h2>
                    Друзья Ванька :
                </h2>
            </div>
            <Friends_container />
        </div>

    )
}

export default Friends;