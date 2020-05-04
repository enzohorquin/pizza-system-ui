import { toastr } from 'react-redux-toastr';

export const notificationSuccess = (
  notification,
  callbackOnHide,
  callbackOnOk
) =>
  toastr.success(notification.title, notification.message, {
    timeOut: 3000,
    position: 'top-right',
    progressBar: false,
    width: '300px',
    onHideComplete: () => {
      callbackOnHide();
    },
    onOk: () => {
      callbackOnOk();
    },
  });
export const notificationError = (notification, callbackOnHide, callbackOnOk) =>
  toastr.error(notification.title, notification.message, {
    timeOut: 3000,
    position: 'top-right',
    progressBar: false,
    width: '300px',
    onHideComplete: () => {
      callbackOnHide();
    },
    onOk: () => {
      callbackOnOk();
    },
  });
