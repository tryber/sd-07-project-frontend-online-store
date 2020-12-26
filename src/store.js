import { createStore } from 'redux';
import cartQuantityReducer from './reducers/cartQuantityReducer';

const store = createStore(cartQuantityReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
