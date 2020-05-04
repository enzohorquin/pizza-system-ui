import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';
import Counter from '../Counter';

const ProductItem = ({
  idProduct,
  name,
  img,
  alt,
  priceEur,
  priceDol,
  description,
  quantity,
  isCartItem,
}) => {
  return (
    <div className="product-item">
      <Image src={img} className="product-item__img" alt={alt} />
      <div className="product-item__detail">
        <span className="product-item__name">
          {name}
          <span className="product-item__price" />
          <b>{`$${priceDol} or ${priceEur}€`}</b>
        </span>
        <span className="product-item__description">{description}</span>
        <Counter
          idProduct={idProduct}
          quantity={quantity}
          isCartItem={isCartItem}
          priceEur={priceEur}
          priceDol={priceDol}
        />
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  idProduct: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  priceEur: PropTypes.string.isRequired,
  priceDol: PropTypes.string.isRequired,
  description: PropTypes.string,
  quantity: PropTypes.number,
  isCartItem: PropTypes.bool,
};

ProductItem.defaultProps = {
  description: 'Ingredients will be listed here.',
  quantity: 0,
  isCartItem: false,
};

export default ProductItem;
