import { SET_ERRORS } from '../../actions/types';
import errorReducer from '../error';

describe('error reducer', () => {
  it('Should set error info', () => {
    const action = {
      type: SET_ERRORS,
      payload: {
        errors: {
          message: 'You have an error',
        },
      },
    };
    const newState = errorReducer(undefined, action);
    expect(newState).toEqual({
      errors: {
        message: 'You have an error',
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
