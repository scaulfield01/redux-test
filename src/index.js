import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const state = {
	todos: [
		{id:1, name: "static 1 ", isComplete: true},
		{id:2, name: "static 2 ", isComplete: true},
		{id:3, name: "static 3 ", isComplete: true}
	]
}


ReactDOM.render(<App todos={state.todos} />, document.getElementById('root'));
serviceWorker.unregister();
