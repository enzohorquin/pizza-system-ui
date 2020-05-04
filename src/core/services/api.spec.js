import * as axios from '../utils/axiosInstance';
import * as api from './api';

jest.mock('../utils/axiosInstance.js');

describe('Api calls Test', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  const mocked = { status: 200, data: [] };

  axios.axiosInstance.get.mockImplementationOnce(() => Promise.resolve(mocked));
  axios.axiosInstance.post.mockImplementationOnce(() =>
    Promise.resolve(mocked)
  );
  it('getProducts', async () => {
    const payload = {
      data: 'Data',
    };
    await api.getProducts(payload);
    expect(
      axios.axiosInstance.get
    ).toHaveBeenCalledWith('/Products/getProducts', { params: payload });
  });
  it('getProductsFromCart', async () => {
    await api.getProductsFromCart();
    expect(axios.axiosInstance.get).toHaveBeenCalledWith(
      '/ProductsInCart/getProducts'
    );
  });
  it('getAllAddresses', async () => {
    await api.getAllAddresses();
    expect(axios.axiosInstance.get).toHaveBeenCalledWith(
      '/Addresses/getAllAddresses'
    );
  });
  it('getOrders', async () => {
    await api.getOrders();
    expect(axios.axiosInstance.get).toHaveBeenCalledWith(
      '/Orders/getAllOrders'
    );
  });
  it('addProductToCart', async () => {
    const payload = { data: '123' };
    await api.addProductToCart(payload);
    expect(axios.axiosInstance.post).toHaveBeenCalledWith(
      '/ProductsInCart/add',
      payload
    );
  });
  it('deleteProductFromCart', async () => {
    const payload = { data: '123' };
    await api.deleteProductFromCart(payload);
    expect(axios.axiosInstance.post).toHaveBeenCalledWith(
      '/ProductsInCart/delete',
      payload
    );
  });
  it('createOrder', async () => {
    const payload = { data: '123' };
    await api.createOrder(payload);
    expect(axios.axiosInstance.post).toHaveBeenCalledWith(
      '/Orders/createOorder',
      payload
    );
  });
  it('addAddress', async () => {
    const payload = { data: '123' };
    await api.addAddress(payload);
    expect(axios.axiosInstance.post).toHaveBeenCalledWith(
      '/Addresses/addAddress',
      payload
    );
  });
  it('clearCart', async () => {
    await api.clearCart();
    expect(axios.axiosInstance.delete).toHaveBeenCalledWith(
      '/ProductsInCart/clearCart'
    );
  });
});
