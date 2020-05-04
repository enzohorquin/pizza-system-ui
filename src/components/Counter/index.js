import { connect } from 'react-redux';
import Counter from './Counter';
import { addToCart } from '../../core/actions';

const mapDispatchToProps = (dispatch) => ({
  addProductToCart: (payload) => dispatch(addToCart(payload)),
});
export default connect(undefined, mapDispatchToProps)(Counter);
