import {
  SET_CART,
  CLEAR_CART_SUCCESS,
  DELETE_FROM_CART_SUCCESS,
  ADD_TO_CART_SUCCESS,
} from '../actions/types';

const initialState = {
  cart: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CART:
      return { ...state, cart: payload.data };
    case CLEAR_CART_SUCCESS:
      return {
        ...state,
        cart: [],
      };
    case DELETE_FROM_CART_SUCCESS:
      return {
        ...state,
        cart: state.cart.filter((item) => item.idProduct !== payload.idProduct),
      };
    case ADD_TO_CART_SUCCESS: {
      const filteredCart = state.cart.filter(
        (item) => item.idProduct !== payload.idProduct
      );
      return {
        ...state,
        cart: [...filteredCart, payload],
      };
    }
    default:
      return state;
  }
};
