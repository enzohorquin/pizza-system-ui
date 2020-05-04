import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ProductItem from '../../components/ProductItem';

const Menu = ({ getProducts, products }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);
  return (
    <div className="menu container ">
      <ul>
        {products.map((item) => (
          <li key={item.idProduct}>
            <ProductItem
              idProduct={item.idProduct}
              name={item.name}
              img="/images/pizza.png"
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
};
export default Menu;
