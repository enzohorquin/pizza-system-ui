import { call, put, takeLatest } from 'redux-saga/effects';
import {
  GET_ORDER_HISTORY,
  SET_ERRORS,
  CREATE_ORDER_REQUEST,
} from '../actions/types';
import {
  setOrderHistory,
  createOrderSuccess,
  clearCartSuccess,
} from '../actions';
import { getOrders, createOrder, clearCart } from '../services/api';

function* initiateGetOrders() {
  try {
    const response = yield call(getOrders);
    yield put(setOrderHistory(response.data));
  } catch (errors) {
    yield put({ type: SET_ERRORS, payload: errors.data });
  }
}
export function* watchGetOrders() {
  yield takeLatest(GET_ORDER_HISTORY, initiateGetOrders);
}

function* initiateCreateOrder(action) {
  try {
    yield call(createOrder, action.payload);
    yield call(clearCart);
    yield put(createOrderSuccess());
    yield put(clearCartSuccess());
  } catch (errors) {
    yield put({ type: SET_ERRORS, payload: errors.data });
  }
}

export function* watchCreateOrder() {
  yield takeLatest(CREATE_ORDER_REQUEST, initiateCreateOrder);
}
