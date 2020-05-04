import { connect } from 'react-redux';
import OrderHistory from './OrderHistory';
import { getOrderHistory } from '../../core/actions';

const mapStateToProps = (state) => ({
  orders: state.orders.orderHistory,
});

const mapDispatchToProps = (dispatch) => ({
  getOrderHistory: () => dispatch(getOrderHistory()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory);
