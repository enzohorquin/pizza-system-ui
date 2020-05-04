import { axiosInstance } from '../utils/axiosInstance';

export const getProducts = (payload) =>
  axiosInstance.get('/Products/getProducts', { params: payload });

export const getProductsFromCart = () =>
  axiosInstance.get('/ProductsInCart/getProducts');

export const addProductToCart = (payload) =>
  axiosInstance.post('/ProductsInCart/add', payload);

export const deleteProductFromCart = (payload) =>
  axiosInstance.post('/ProductsInCart/delete', payload);

export const createOrder = (payload) =>
  axiosInstance.post('/Orders/createOorder', payload);

export const getOrders = () => axiosInstance.get('/Orders/getAllOrders');

export const getAllAddresses = () =>
  axiosInstance.get('/Addresses/getAllAddresses');

export const addAddress = (payload) =>
  axiosInstance.post('/Addresses/addAddress', payload);

export const clearCart = () =>
  axiosInstance.delete('/ProductsInCart/clearCart');
