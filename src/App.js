import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
} from 'react-router-dom';
import './index.css';
import {addNewPost, sendMessage, subscribe } from './redux/state';
import store from './redux/state'



function App() {
	return (
		<Router>
			<div className="App">
				<div className="bg_wrapper">
					<img className="bg" src="https://www.thehotdesktop.com/web/wallpapers/cyan-color-burst-hd-wallpaper/2560x1440.jpg" alt="img" />{/* https://i.pinimg.com/originals/e1/4a/89/e14a8998881103a34b931bd4802a5161.gif */}
					<div className="lol"></div>
				</div>
				<Header />
				<Main state={store} dispatch={store.dispatch}/>
			</div>
		</Router>
	);
}

export default App;
