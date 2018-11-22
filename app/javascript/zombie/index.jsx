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

import zombiesReducer from './reducers/zombies_reducer';

import { initialState } from './data/initial_state';

// const initialState = {
//   "zombies": {  
//     "data": [
//       {
//         "id": "285",
//         "type": "zombie",
//         "attributes": {
//           "name": "Illustrious Mr. Goldenfold 923",
//           "hit_points": 4,
//           "speed": 2,
//           "brains_eaten": 12,
//           "turn_date": "2018-08-12T00:00:00.000Z",
//           "weapons": [
//             {
//               "id": 197,
//               "name": "Mobile oboe 510",
//               "attack_points": 4,
//               "durability": 10,
//               "price": 32,
//               "created_at": "2018-11-20T14:39:52.000Z",
//               "updated_at": "2018-11-20T14:39:52.000Z"
//             }
//           ],
//           "armors": [
//             {
//               "id": 189,
//               "name": "Pumpkin seed warmor 286",
//               "defense_points": 1,
//               "durability": 1,
//               "price": 23,
//               "created_at": "2018-11-20T14:39:52.000Z",
//               "updated_at": "2018-11-20T14:39:52.000Z"
//             }
//           ]
//         }
//       }
//     ]
//   }
// }

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
          <Route path="/zombies/:id" component={ZombiesShow} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('zombie_app')
);
