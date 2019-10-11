import React, { Component } from "react";
import thunk from 'redux-thunk';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { Provider } from "react-redux"

import './App.css';
import Counter from '../components/Counter';
import * as reducers from '../states/reducers';


function App() {


  const monsterReducer = combineReducers({
    count: reducers.counterReducer,
    // dog: reducers.dogsReducer
    // rootReducer: reducers.reducer,
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
      </div>
    </Provider>
  );
}

export default App;

// import "./App.css";
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>SMURFS! 2.0 W/ Redux</h1>
//         <div>Welcome to your state management version of Smurfs!</div>
//         <div>Start inside of your `src/index.js` file!</div>
//         <div>Have fun!</div>
//       </div>
//     );
//   }
// }

// export default App;
