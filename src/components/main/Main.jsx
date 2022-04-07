import React from "react";
import classes from './Main.module.css';
import Container from './content/container/Container.jsx';

const Main = (props) => {
    return (
        <main className={classes.main}>
            <Container state={props.getState()} addNewPost={props.store.addNewPost()} sendMessage={ props.store.sendMessage() }/>
        </main>
    )
}


export default Main;