import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import './index.css';
import reducer from './reducers'
import EventsIndex from './components/events_index';
import * as serviceWorker from './serviceWorker';


// どのコンポーネントからも参照できるようにする Provider
const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <EventsIndex />
  </Provider>
  , document.getElementById('root')
);
serviceWorker.unregister();
