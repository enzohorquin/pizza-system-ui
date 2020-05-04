import React from 'react';
import ReduxToastr from 'react-redux-toastr';
import Main from './screens/Main';
import Footer from './components/Footer';
import Nav from './components/Nav';
import './app.scss';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

function App() {
  return (
    <>
      <Nav />
      <ReduxToastr preventDuplicates position="bottom-left" />
      <Main />
      <Footer />
    </>
  );
}

export default App;
