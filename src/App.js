import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';
import Menu from './screens/Menu';
import Cart from './screens/Cart';
import OrderHistory from './screens/OrderHistory';
import Footer from './components/Footer';
import Nav from './components/Nav';
import './app.scss';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

function App() {
  return (
    <>
      <Nav />
      <ReduxToastr preventDuplicates position="bottom-left" />
      <Switch>
        <Route exact path="/" component={Menu} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/order-history" component={OrderHistory} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
