import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Tooltip from '@material-ui/core/Tooltip';
import Remove from '@material-ui/icons/Remove';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0.2),
    },
  },
}));
const Counter = ({
  addProductToCart,
  idProduct,
  priceDol,
  priceEur,
  quantity,
  isCartItem,
}) => {
  const [amount, setamount] = useState(quantity);
  const classes = useStyles();
  const increment = () => {
    setamount(amount + 1);
  };
  const decrement = () => {
    if (amount > 0) setamount(amount - 1);
  };
  const handleClick = () => {
    if (amount > 0) {
      addProductToCart({ idProduct, quantity: amount, priceDol, priceEur });
      setamount(0);
    }
  };
  const quantityLabel = isCartItem ? `Quantity: ${amount}` : amount;

  const addIcon = !isCartItem ? (
    <IconButton onClick={increment} aria-label="add">
      <AddIcon />
    </IconButton>
  ) : null;

  const removeIcon = !isCartItem ? (
    <IconButton onClick={decrement} aria-label="remove">
      <Remove />
    </IconButton>
  ) : null;

  const addToCartIcon = !isCartItem ? (
    <Tooltip title="Add to Cart" aria-label="cart">
      <ShoppingCartIcon onClick={handleClick} className="shopping-cart" />
    </Tooltip>
  ) : null;

  return (
    <div className={classes.root}>
      {addIcon}
      <span className="count-value">{quantityLabel}</span>
      {removeIcon}
      {addToCartIcon}
    </div>
  );
};

Counter.propTypes = {
  addProductToCart: PropTypes.func.isRequired,
  idProduct: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  isCartItem: PropTypes.bool.isRequired,
};

export default Counter;
