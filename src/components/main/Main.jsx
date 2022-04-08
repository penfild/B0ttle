import React from "react";
import classes from './Main.module.css';
import Container from './content/container/Container.jsx';
import store from '../../redux/state'

const Main = (props) => {
    return (
        <main className={classes.main}>
            <Container state={store}  dispatch={store.dispatch} />
        </main>
    )
}


export default Main;