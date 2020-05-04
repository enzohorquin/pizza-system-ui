import { SET_ADDRESSES, ADD_ADDRESS_SUCCESS } from '../actions/types';

const initialState = {
  addresses: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ADDRESSES:
      return { ...state, orderHistory: payload.data };
    case ADD_ADDRESS_SUCCESS:
      return state;
    default:
      return state;
  }
};
