import {
  GET_PRODUCTS,
  SET_PRODUCTS,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  GET_CART,
  SET_CART,
  DELETE_FROM_CART_REQUEST,
  DELETE_FROM_CART_SUCCESS,
  CLEAR_CART_REQUEST,
  CLEAR_CART_SUCCESS,
  GET_ADDRESSES,
  SET_ADDRESSES,
  ADD_ADDRESS_REQUEST,
  ADD_ADDRESS_SUCCESS,
  GET_ORDER_HISTORY,
  SET_ORDER_HISTORY,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  SET_ERRORS,
  CLEAR_ERRORS,
  CLEAR_NOTIFICATION,
  SET_NOTIFICATION,
} from './types';

// Products Action Creators
export const getProducts = () => ({ type: GET_PRODUCTS });
export const setProducts = (payload) => ({ type: SET_PRODUCTS, payload });
// Cart Action Creators
export const addToCart = (payload) => ({ type: ADD_TO_CART_REQUEST, payload });
export const getCartRequest = () => ({ type: GET_CART });
export const setCartSuccess = (payload) => ({ type: SET_CART, payload });
export const addToCartSuccess = (payload) => ({
  type: ADD_TO_CART_SUCCESS,
  payload,
});
export const deleteFromCart = (payload) => ({
  type: DELETE_FROM_CART_REQUEST,
  payload,
});
export const deleteFromCartSuccess = (payload) => ({
  type: DELETE_FROM_CART_SUCCESS,
  payload,
});
export const clearCartRequest = (payload) => ({
  type: CLEAR_CART_REQUEST,
  payload,
});

export const clearCartSuccess = () => ({
  type: CLEAR_CART_SUCCESS,
});
// Address Action Creators
export const getAddresses = () => ({ type: GET_ADDRESSES });
export const setAddresses = (payload) => ({ type: SET_ADDRESSES, payload });
export const addAddressRequest = (payload) => ({
  type: ADD_ADDRESS_REQUEST,
  payload,
});
export const addAddressSuccess = () => ({
  type: ADD_ADDRESS_SUCCESS,
});
// Order Action Creators
export const getOrderHistory = () => ({ type: GET_ORDER_HISTORY });
export const setOrderHistory = (payload) => ({
  type: SET_ORDER_HISTORY,
  payload,
});

export const createOrder = (payload) => ({
  type: CREATE_ORDER_REQUEST,
  payload,
});
export const createOrderSuccess = () => ({
  type: CREATE_ORDER_SUCCESS,
});
// Error action creator
export const setError = (payload) => ({
  type: SET_ERRORS,
  payload,
});

export const clearError = () => ({
  type: CLEAR_ERRORS,
});

export const clearNotification = () => ({
  type: CLEAR_NOTIFICATION,
});

export const setNotification = () => ({
  type: SET_NOTIFICATION,
});
