import { connect } from 'react-redux';
import Menu from './Menu';
import { getProducts, clearNotification } from '../../core/actions';

const mapStateToProps = (state) => ({
  products: state.products.products,
  success: state.notification.notification,
});
const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts()),
  clearNotification: () => dispatch(clearNotification()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
