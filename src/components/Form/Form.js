import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import useForm from '../../core/utils/useFormHook';
import { validate } from '../../core/utils/utils';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const deliveryCost = Math.floor(Math.random() * 10);
const initialState = {
  street: '',
  apartment: '',
  note: '',
};
const Form = ({
  createOrder,
  cart,
  totalAmountDol,
  totalAmountEur,
  handleClose,
}) => {
  const classes = useStyles();
  const onSubmit = () => {
    const products = cart.map((item) => ({
      idProduct: item.idProduct,
      quantity: item.quantity,
    }));
    // eslint-disable-next-line no-use-before-define
    const { street, apartment, note } = inputs;
    handleClose();
    createOrder({
      products,
      street,
      apartment,
      note,
      totalAmountDol: totalAmountDol + deliveryCost,
      totalAmountEur: totalAmountEur + deliveryCost,
    });
  };
  const { inputs, handleInputChange, handleSubmit } = useForm(
    initialState,
    onSubmit
  );

  return (
    <form
      className={classes.root}
      onSubmit={handleSubmit}
      onChange={handleInputChange}
      autoComplete="off"
    >
      <TextField
        id="street"
        onChange={handleInputChange}
        name="street"
        label="Street"
      />
      <TextField
        id="apartment"
        onChange={handleInputChange}
        name="apartment"
        label="Apartment"
        maxLength={4}
      />
      <TextField
        id="note"
        onChange={handleInputChange}
        name="note"
        style={{ width: 500 }}
        label="Additional Note"
      />
      <span className="amount-total">
        <b>
          <span className="amount-total__text">Total:</span>
          <span className="amount-total__final-price">{`$${
            totalAmountDol + deliveryCost
          } or ${
            totalAmountEur + deliveryCost
          }€ (Delivery costs included)`}</span>
        </b>
      </span>
      <button type="submit" disabled={!validate(inputs)} className="buy-button">
        Buy
      </button>
    </form>
  );
};

Form.propTypes = {
  createOrder: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
      priceDol: PropTypes.string,
      priceEur: PropTypes.string,
    })
  ).isRequired,
  totalAmountDol: PropTypes.number.isRequired,
  totalAmountEur: PropTypes.number.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Form;
