import React from 'react'
import classes from './Profile.module.css'
import Header from './Header/Header.jsx'
import Posts from './Main/MyPosts.jsx'
import store from '../../../../../redux/state'


const Main_info = (props) => {
    return (
        <div className={classes.profile}>
            <Header />
            <Posts state={store._state} dispatch={store.dispatch}/>
        </div>
    )
    
}

export default Main_info;