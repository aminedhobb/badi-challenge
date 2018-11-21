import { FETCH_ZOMBIES } from '../actions';

const zombiesReducer = (state = [], action) => {
  switch(action.type) {
    case FETCH_ZOMBIES:
      return action.payload;
    default: 
      return state;
  }
}

export default zombiesReducer;