import { SET_ERRORS } from '../../actions/types';
import errorReducer from '../error';

describe('error reducer', () => {
  it('Should set error info', () => {
    const action = {
      type: SET_ERRORS,
      payload: {
        errors: {
          message: 'Ooops, something went wrong',
        },
      },
    };
    const newState = errorReducer(undefined, action);
    expect(newState).toEqual({
      errors: {
        message: 'Ooops, something went wrong',
      },
    });
  });
  it('Should return default state', () => {
    const action = {
      type: 'TYPE',
    };
    const newState = errorReducer(undefined, action);
    expect(newState).toEqual({ errors: {} });
  });
});
