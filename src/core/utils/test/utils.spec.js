import { calculatePrice, isEmpty, formatDate } from '../utils';

describe('calculatePrice', () => {
  it('Should return correct amount', () => {
    const data = [
      {
        priceEur: '2.00',
        priceDol: '3.00',
        quantity: 2,
      },
      {
        priceEur: '5.00',
        priceDol: '6.00',
        quantity: 4,
      },
    ];
    expect(calculatePrice(data, 'priceDol')).toEqual(30);
    expect(calculatePrice(data, 'priceEur')).toEqual(24);
  });
});

describe('isEmpty', function () {
  it('Should return true', () => {
    const data = {};
    expect(isEmpty(data)).toBeTruthy();
  });
  it('Should return true', () => {
    const data = '';
    expect(isEmpty(data)).toBeTruthy();
  });
  it('Should return true', () => {
    const data = null;
    expect(isEmpty(data)).toBeTruthy();
  });
  it('Should return true', () => {
    const data = undefined;
    expect(isEmpty(data)).toBeTruthy();
  });
});
describe('isEmpty', function () {
  it('Should return false', () => {
    const data = {
      errors: {
        email: 'Email is invalid',
        password: 'Password must have 2 chars',
      },
    };
    expect(isEmpty(data)).toBeFalsy();
  });
  it('Should return false', () => {
    const data = 'Hola';
    expect(isEmpty(data)).toBeFalsy();
  });
});

describe('formatDate', () => {
  it('Should Format', () => {
    const fecha = '2018-12-12T03:00:00.000Z';
    expect(formatDate(fecha)).toEqual('2018-12-12');
  });
});
