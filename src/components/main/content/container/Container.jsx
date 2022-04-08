import React, { Profiler } from 'react'
import classes from './Container.module.css';
import Profile from '../routs/Profile/Profile.jsx';
import Friends from '../routs/Friends/Friends.jsx';
import SideBar from '../../side-bar/Mlst.jsx';
import Messengers from '../routs/Messengers/Messengers.jsx';
import MessangerPage from './../routs/Messengers/Message/Message.jsx';
import { Routes, Route, Link } from 'react-router-dom';
import store from '../../../../redux/state'


const Container = (props) => {
    return (
        <div className={classes.Container}>
            <SideBar />
            <Routes>
                <Route path='/profile' element={<Profile

                    state={store}
                    dispatch={store.dispatch}

                />} />
                <Route path='/friends' element={<Friends />} />
                <Route path='/messengers' element={<Messengers

                    state={store}
                    sendMessage={props.sendMessage}

                />} />
                <Route path='/messangerpage' element={<MessangerPage

                    state={store} dispatch={store.dispatch} src={store.getlolState.srcs} sender={store.getlolState().messagesInfo.sender} user_id={store.getlolState().messagesInfo.user_id} />} />
            </Routes>
        </div>
    )
}


export default Container;