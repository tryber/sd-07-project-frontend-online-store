import { getItemsTotal } from '../services/localStorageService';

const INCREASE_TOTAL = 'INCREASE_TOTAL';
const cartItemsQuantity = getItemsTotal();

const INITIAL_STATE = {
  totalItems: cartItemsQuantity,
}

const cartQuantityReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREASE_TOTAL:
      return {...state, totalItems: action.totalItems};
    default:
      return state;
  }
}

export default cartQuantityReducer;
