import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <App state={state}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
}
rerenderEntireTree(state)

