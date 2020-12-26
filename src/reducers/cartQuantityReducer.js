import { getItemsTotal } from '../services/localStorageService';

const INCREASE_TOTAL = 'INCREASE_TOTAL';

const INITIAL_STATE = {
  totalItems: getItemsTotal(),
}

const cartQuantityReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREASE_TOTAL:
      return {...state, totalItems: state.totalItems + action.number};
    default:
      return state;
  }
}

export default cartQuantityReducer;
