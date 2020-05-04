import { calculatePrice } from '../utils';

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
