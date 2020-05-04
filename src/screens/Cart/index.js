import { connect } from 'react-redux';
import Cart from './Cart';
import {
  getCartRequest,
  deleteFromCart,
  clearNotification,
} from '../../core/actions';

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
  success: state.notification.notification,
});
const mapDispatchToProps = (dispatch) => ({
  getCart: () => dispatch(getCartRequest()),
  deleteFromCart: (payload) => dispatch(deleteFromCart(payload)),
  clearNotification: () => dispatch(clearNotification()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
