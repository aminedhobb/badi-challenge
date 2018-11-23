import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory } from 'history';
import { reducer as formReducer } from 'redux-form';

import '../assets/stylesheets/application.scss';

import ZombiesIndex from './containers/zombies_index';
import ZombiesShow from './containers/zombies_show';
import ZombiesNew from './containers/zombies_new';

import zombiesReducer from './reducers/zombies_reducer';

import { initialState } from './data/initial_state';

const reducers = combineReducers({
  zombies: zombiesReducer,
  form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(reduxPromise, logger));

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <div className="view-container">
        <Switch>
          <Route path="/" exact component={ZombiesIndex} />
          <Route path="/zombies/new" exact component={ZombiesNew} />
          <Route path="/zombies/:id" component={ZombiesShow} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('zombie_app')
);
