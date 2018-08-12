import * as React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './store';
import thunk from 'redux-thunk';

import TeamSelect from './Components/TeamSelect/TeamSelect';

import './App.css';

import logo from './logo.svg';

const store = createStore(rootReducer, applyMiddleware(thunk));

console.log(store.getState());
class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <TeamSelect />
        </div>
      </Provider>
    );
  }
}

export default App;
