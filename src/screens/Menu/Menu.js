import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ProductItem from '../../components/ProductItem';
import { notificationSuccess } from '../../core/utils/Notifications';

const Menu = ({ getProducts, products, success, clearNotification }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const notificationInfo = {
    title: 'Item Added to cart',
    message: '',
  };
  const notification = success
    ? notificationSuccess(
        notificationInfo,
        () => {
          clearNotification();
        },
        () => {
          clearNotification();
        }
      )
    : null;
  return (
    <div className="menu">
      {notification}
      <ul>
        {products.map((item) => (
          <li key={item.idProduct}>
            <ProductItem
              idProduct={item.idProduct}
              name={item.name}
              img="/images/pizza.PNG"
              alt="pizza"
              priceDol={item.priceDol}
              priceEur={item.priceEur}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
Menu.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
      priceDol: PropTypes.string,
      priceEur: PropTypes.string,
    })
  ).isRequired,
  getProducts: PropTypes.func.isRequired,
  success: PropTypes.bool.isRequired,
  clearNotification: PropTypes.func.isRequired,
};
export default Menu;
