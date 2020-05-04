import { SET_ORDER_HISTORY, CREATE_ORDER_SUCCESS } from '../actions/types';

const initialState = {
  orderHistory: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ORDER_HISTORY:
      return { ...state, orderHistory: payload.data };
    case CREATE_ORDER_SUCCESS:
      return state;
    default:
      return state;
  }
};
