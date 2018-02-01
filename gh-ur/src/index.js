import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import reducer from "./store";
import promise from 'redux-promise';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


//console.log(store.getState());
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(<Provider store={createStoreWithMiddleware(reducer)}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
