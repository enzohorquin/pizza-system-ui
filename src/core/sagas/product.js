import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_PRODUCTS, SET_ERRORS } from '../actions/types';
import { setProducts } from '../actions';
import { getProducts } from '../services/api';

function* initiateGetProducts() {
  try {
    const categoryPizza = {
      idCategory: 1,
    };
    const response = yield call(getProducts, categoryPizza);
    yield put(setProducts(response.data));
  } catch (errors) {
    yield put({ type: SET_ERRORS, payload: errors.data });
  }
}
export default function* watchGetProducts() {
  yield takeLatest(GET_PRODUCTS, initiateGetProducts);
}
