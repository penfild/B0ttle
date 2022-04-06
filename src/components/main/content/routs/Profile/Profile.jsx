import React from 'react'
import classes from './Profile.module.css'
import Header from './Header/Header.jsx'
import Posts from './Main/MyPosts.jsx'



const Main_info = (props) => {
    return (
        <div className={classes.profile}>
            <Header />
            <Posts state={props.state} addNewPost={props.addNewPost}/>
        </div>
    )
    
}

export default Main_info;