import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/state'


let rerenderEntireTree = () => {
    ReactDOM.render(
      <React.StrictMode>
        <App state={store.getlolState()} dispatch={store.dispatch}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
}
rerenderEntireTree(store.getlolState())

store.subscribe(rerenderEntireTree)