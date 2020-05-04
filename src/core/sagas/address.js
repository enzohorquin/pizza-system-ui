import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_ADDRESSES, SET_ERRORS } from '../actions/types';
import { setAddresses } from '../actions';
import { getAllAddresses } from '../services/api';

function* initiateGetAddress() {
  try {
    const response = yield call(getAllAddresses);
    yield put(setAddresses(response.data));
  } catch (errors) {
    yield put({ type: SET_ERRORS, payload: errors.data });
  }
}
export default function* watchGetAddresses() {
  yield takeLatest(GET_ADDRESSES, initiateGetAddress);
}
