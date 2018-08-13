import * as React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import rootReducer from './store';
import thunk from 'redux-thunk';

import TeamSelect from './Containers/TeamSelect/TeamSelect';
import TeamPage from './Containers/TeamPage/TeamPage';

import './App.css';

import logo from './logo.svg';

const store = createStore(rootReducer, applyMiddleware(thunk));

console.log(store.getState());


// Need to research router config so can place router in another file
// for the time being we are restricted on routing capabilities
// and cant use dynamic routing (url params)


class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Route exact path='/' component={TeamSelect}/>
          <Route path='/team/:teamName' component={TeamPage}/>
        </div>
      </Router>

      </Provider>
    );
  }
}

export default App;
