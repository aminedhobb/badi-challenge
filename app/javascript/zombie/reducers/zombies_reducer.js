import { FETCH_ZOMBIES } from '../actions';
import { FETCH_ZOMBIE } from '../actions';
import { SEARCH_ZOMBIES } from '../actions';

const zombiesReducer = (state = [], action) => {
  switch(action.type) {
    case FETCH_ZOMBIES:
      return action.payload;
    case SEARCH_ZOMBIES:
      return action.payload;
    case FETCH_ZOMBIE:
      action.payload.data = [action.payload.data];
      return action.payload;
    default: 
      return state;
  }
}

export default zombiesReducer;