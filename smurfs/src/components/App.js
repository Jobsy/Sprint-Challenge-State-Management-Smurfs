
import React, { Component } from "react";
import thunk from 'redux-thunk';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { Provider } from "react-redux"

import './App.css';
import Counter from '../components/Counter';
import Smurfs from '../components/Smurfs';
import * as reducers from '../states/reducers';
import PostSmurfs from "./PostSmurfs";


function App() {

  const monsterReducer = combineReducers({

    count: reducers.counterReducer,
    rootReducer: reducers.reducer,
    rootReducer2: reducers.reducer2,
  });

  const store = createStore(
    monsterReducer,
    {},
    compose(
      applyMiddleware(thunk),
      // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );

  return (
    <Provider store={store}>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>

        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>

        <div>Have fun!</div>
        <Counter />
        <Smurfs /> <br />
        <PostSmurfs />
      </div>
    </Provider>
  );
}


export default App;
