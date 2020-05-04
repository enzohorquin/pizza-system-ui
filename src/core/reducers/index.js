import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import cartReducer from './cart';
import orderReducer from './order';
import productReducer from './products';
import addressReducer from './address';
import notificationReducer from './notification';
import errorReducer from './error';

const rootReducer = combineReducers({
  toastr: toastrReducer,
  cart: cartReducer,
  orders: orderReducer,
  products: productReducer,
  addresses: addressReducer,
  notification: notificationReducer,
  errors: errorReducer,
});
export default rootReducer;
