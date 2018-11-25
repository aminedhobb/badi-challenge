import { FETCH_WEAPONS } from '../actions';

const weaponsReducer = (state = null, action) => {
  switch(action.type) {
    case FETCH_WEAPONS:
      return action.payload;
    default:
      return state;
  }
}

export default weaponsReducer;