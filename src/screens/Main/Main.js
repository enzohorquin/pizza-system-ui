import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from '../Menu';
import Cart from '../Cart';
import OrderHistory from '../OrderHistory';
import { notificationError } from '../../core/utils/Notifications';
import { isEmpty } from '../../core/utils/utils';

const Main = ({ error, clearError }) => {
  const notificationInfo = {
    title: 'Ooops',
    message: 'Something went wrong!',
  };
  const notification = !isEmpty(error)
    ? notificationError(
        notificationInfo,
        () => {
          clearError();
        },
        () => {
          clearError();
        }
      )
    : null;

  return (
    <>
      {notification}
      <Switch>
        <Route exact path="/" component={Menu} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/order-history" component={OrderHistory} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </>
  );
};

Main.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string,
    status: PropTypes.number,
  }).isRequired,
  clearError: PropTypes.func.isRequired,
};

export default Main;
