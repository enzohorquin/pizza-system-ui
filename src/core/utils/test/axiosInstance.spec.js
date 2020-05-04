import { formatResponse, formatError } from '../axiosInstance';

describe('formatResponse', () => {
  it('Should return response with data and status', () => {
    const mockResponse = {
      data: 'data',
      status: 200,
    };
    const { data, status } = formatResponse(mockResponse);
    expect(data).toEqual(mockResponse.data);
    expect(status).toEqual(mockResponse.status);
  });
});

describe('formatError', () => {
  it('Should return reject Promise', () => {
    const error = {
      response: {
        data: 'Could not retrieve data from server',
        status: 500,
      },
    };
    const err = formatError(error);
    // eslint-disable-next-line prefer-promise-reject-errors
    expect(err).toEqual(Promise.reject({ error }));
  });
});
