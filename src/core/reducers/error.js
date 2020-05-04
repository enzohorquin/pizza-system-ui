import { SET_ERRORS, CLEAR_ERRORS } from '../actions/types';

const initialState = {
  errors: {},
};

export default function (state = initialState, { type }) {
  switch (type) {
    case SET_ERRORS:
      return { ...state, errors: { message: 'Ooops, something went wrong' } };
    case CLEAR_ERRORS:
      return { ...state, errors: {} };
    default:
      return state;
  }
}
