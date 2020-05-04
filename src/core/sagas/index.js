import { all, fork } from 'redux-saga/effects';
import productSaga from './product';
import addressSaga from './address';
import { watchGetOrders, watchCreateOrder } from './order';
import { watchGetCart, watchDeleteFromCart, watchAddToCart } from './cart';

export default function* rootSagas() {
  yield all([
    fork(productSaga),
    fork(watchGetCart),
    fork(addressSaga),
    fork(watchGetOrders),
    fork(watchCreateOrder),
    fork(watchDeleteFromCart),
    fork(watchAddToCart),
  ]);
}
