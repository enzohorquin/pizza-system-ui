import { call, put, takeLatest } from 'redux-saga/effects';
import {
  GET_CART,
  SET_ERRORS,
  DELETE_FROM_CART_REQUEST,
  ADD_TO_CART_REQUEST,
} from '../actions/types';
import {
  setCartSuccess,
  deleteFromCartSuccess,
  addToCartSuccess,
  setNotification,
} from '../actions';
import {
  getProductsFromCart,
  deleteProductFromCart,
  addProductToCart,
} from '../services/api';

function* initiateGetCart() {
  try {
    const response = yield call(getProductsFromCart);
    yield put(setCartSuccess(response.data));
  } catch (errors) {
    yield put({ type: SET_ERRORS, payload: errors.data });
  }
}
export function* watchGetCart() {
  yield takeLatest(GET_CART, initiateGetCart);
}

function* initiateDeleteItemFromCart(action) {
  try {
    yield call(deleteProductFromCart, action.payload);
    yield put(deleteFromCartSuccess(action.payload));
  } catch (errors) {
    yield put({ type: SET_ERRORS, payload: errors.data });
  }
}

export function* watchDeleteFromCart() {
  yield takeLatest(DELETE_FROM_CART_REQUEST, initiateDeleteItemFromCart);
}

function* initiateAddToCart(action) {
  try {
    const { idProduct, quantity, priceEur, priceDol } = action.payload;
    yield call(addProductToCart, action.payload);
    const item = {
      idProduct,
      quantity,
      priceEur,
      priceDol,
    };
    yield put(addToCartSuccess(item));
    yield put(setNotification());
  } catch (errors) {
    yield put({ type: SET_ERRORS, payload: errors.data });
  }
}

export function* watchAddToCart() {
  yield takeLatest(ADD_TO_CART_REQUEST, initiateAddToCart);
}
