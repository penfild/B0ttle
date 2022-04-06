import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './redux/state'
import {subscribe} from './redux/state'


let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <App state={state} addNewPost={state.addNewPost} sendMessage={state.sendMessage}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
}
rerenderEntireTree(state)

subscribe(rerenderEntireTree)