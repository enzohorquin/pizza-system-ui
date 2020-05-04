import { SET_NOTIFICATION, CLEAR_NOTIFICATION } from '../actions/types';

const initialState = {
  notification: false,
};

export default (state = initialState, { type }) => {
  switch (type) {
    case SET_NOTIFICATION:
      return { ...state, notification: true };
    case CLEAR_NOTIFICATION:
      return { ...state, notification: false };
    default:
      return state;
  }
};
