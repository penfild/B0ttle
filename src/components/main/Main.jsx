import React from "react";
import classes from './Main.module.css';
import Container from './content/container/Container.jsx';

const Main = (props) => {
    return (
        <main className={classes.main}>
            <Container state={props.state} addNewPost={props.addNewPost} sendMessage={ props.sendMessage }/>
        </main>
    )
}


export default Main;