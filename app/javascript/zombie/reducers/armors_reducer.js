import { FETCH_ARMORS } from '../actions';

const armorsReducer = (state = null, action) => {
  switch(action.type) {
    case FETCH_ARMORS:
      return action.payload;
    default:
      return state;
  }
}

export default armorsReducer;