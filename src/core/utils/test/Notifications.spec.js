import { notificationSuccess, notificationError } from '../Notifications';

describe('NotificationSuccess', () => {
  it('Should execute callbacks', () => {
    const callbackOnHide = jest.fn();
    const callbackOnOk = jest.fn();
    const mensaje = {
      title: 'Titulo',
      message: 'Mensaje',
    };
    notificationSuccess(mensaje, callbackOnHide, callbackOnOk);
    setTimeout(() => {
      expect(callbackOnHide).toHaveBeenCalledTimes(1);
      expect(callbackOnOk).toHaveBeenCalledTimes(1);
    }, 3100);
  });
});

describe('NotificationError', () => {
  it('Should execute callbacks', () => {
    const callbackOnHide = jest.fn();
    const callbackOnOk = jest.fn();
    const mensaje = {
      title: 'Titulo',
      message: 'Mensaje',
    };
    notificationError(mensaje, callbackOnHide, callbackOnOk);
    setTimeout(() => {
      expect(callbackOnHide).toHaveBeenCalledTimes(1);
      expect(callbackOnOk).toHaveBeenCalledTimes(1);
    }, 3100);
  });
});
