import React, { Profiler } from 'react'
import classes from './Container.module.css';
import Profile from '../routs/Profile/Profile.jsx';
import Friends from '../routs/Friends/Friends.jsx';
import SideBar from '../../side-bar/Mlst.jsx';
import Messengers from '../routs/Messengers/Messengers.jsx';
import MessangerPage from './../routs/Messengers/Message/Message.jsx';
import { Routes, Route, Link } from 'react-router-dom';

const Container = (props) => {
    return (
        <div className={classes.Container}>
            <SideBar />
            <Routes>
                <Route path='/profile' element={<Profile state={props.state} addNewPost={ props.addNewPost} sendMessage={ props.sendMessage} /> }/>
                <Route path='/friends' element={<Friends />} />
                <Route path='/messengers' element={<Messengers state={props.state} sendMessage={ props.sendMessage}/>} />
                <Route path='/messangerpage' element={<MessangerPage state={props.state} sendMessage={ props.sendMessage } /* src={props.state.messages.src} sender={props.state.messages.sender} user_id={props.state.messages.user_id}  *//> } />
            </Routes>
        </div>
    )
}


export default Container;