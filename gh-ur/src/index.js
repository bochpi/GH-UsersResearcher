import React from 'react';
import ReactDOM from 'react-dom';

import { connect, Provider } from 'react-redux';
import store from "./store";

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


console.log(store.getState());
//const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
