import { connect } from 'react-redux';
import Cart from './Cart';
import { getCartRequest, deleteFromCart } from '../../core/actions';

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
});
const mapDispatchToProps = (dispatch) => ({
  getCart: () => dispatch(getCartRequest()),
  deleteFromCart: (payload) => dispatch(deleteFromCart(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
