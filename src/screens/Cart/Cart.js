import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ProductItem from '../../components/ProductItem';
import { calculatePrice } from '../../core/utils/utils';
import Modal from '../../components/Modal/Modal';
import { notificationSuccess } from '../../core/utils/Notifications';

const Cart = ({
  cart,
  getCart,
  deleteFromCart,
  success,
  clearNotification,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    getCart();
  }, [getCart]);

  const notificationInfo = {
    title: 'Order Created!',
    message: 'Your order should be arriving soon!',
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

  const totalDol = calculatePrice(cart, 'priceDol');
  const totalEur = calculatePrice(cart, 'priceEur');

  const handleDelete = (idProduct) => {
    deleteFromCart({ idProduct });
  };

  const cartList =
    cart.length > 0 ? (
      <>
        <div className="menu">
          {notification}
          <ul>
            {cart.map((item) => {
              return (
                <li className="cart-item" key={item.idProduct}>
                  <ProductItem
                    idProduct={item.idProduct}
                    name={item.name}
                    img="/images/pizza.png"
                    alt="pizza"
                    priceDol={item.priceDol}
                    priceEur={item.priceEur}
                    quantity={item.quantity}
                    isCartItem
                  />
                  <IconButton
                    onClick={() => {
                      handleDelete(item.idProduct);
                    }}
                    aria-label="Delete item from cart"
                  >
                    <DeleteIcon />
                  </IconButton>
                </li>
              );
            })}
          </ul>
          <span className="amount-total">
            <b>
              <span className="amount-total__text">
                Total(without delivery costs):
              </span>
              <span className="amount-total__price">{`$${totalDol} or ${totalEur}€`}</span>
            </b>
          </span>
          <button onClick={handleOpen} type="submit" className="buy-button">
            Proceed to Checkout
          </button>
        </div>
        <Modal
          open={open}
          handleClose={handleClose}
          totalAmountDol={totalDol}
          totalAmountEur={totalEur}
        />
      </>
    ) : (
      <section className="no-items"> No items in cart!</section>
    );
  return cartList;
};
Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
      priceDol: PropTypes.string,
      priceEur: PropTypes.string,
    })
  ).isRequired,
  getCart: PropTypes.func.isRequired,
  success: PropTypes.bool.isRequired,
  clearNotification: PropTypes.func.isRequired,
};

export default Cart;
