import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/state'


let rerenderEntireTree = (store) => {
    ReactDOM.render(
      <React.StrictMode>
        <App state={store} addNewPost={store.addNewPost} sendMessage={store.sendMessage}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
}
rerenderEntireTree(store)

store.subscribe(rerenderEntireTree)