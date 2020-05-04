import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import cartReducer from './cart';
import orderReducer from './order';
import productReducer from './products';
import addressReducer from './address';

const rootReducer = combineReducers({
  toastr: toastrReducer,
  cart: cartReducer,
  orders: orderReducer,
  products: productReducer,
  addresses: addressReducer,
});
export default rootReducer;
