import { connect } from 'react-redux';
import Main from './Main';
import { clearError } from '../../core/actions';

const mapStateToProps = (state) => ({
  error: state.errors.errors,
});
const mapDispatchToProps = (dispatch) => ({
  clearError: () => dispatch(clearError()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Main);
