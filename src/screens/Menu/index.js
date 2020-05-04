import { connect } from 'react-redux';
import Menu from './Menu';
import { getProducts } from '../../core/actions';

const mapStateToProps = (state) => ({
  products: state.products.products,
});
const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
