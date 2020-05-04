import { connect } from 'react-redux';
import Form from './Form';
import { createOrder } from '../../core/actions';

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
});
const mapDispatchToProps = (dispatch) => ({
  createOrder: (payload) => dispatch(createOrder(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Form);
