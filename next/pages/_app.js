import React from "react";
import PropTypes from "prop-types";
import { Footer, Header, Nav } from '@/components'
import { wrapper } from '@/modules/store'
import withReduxSaga from 'next-redux-saga';
import '../styles/globals.css'

const App = ({ Component }) => {
  return <>
  <Header/>
  <Nav/>
  <Component/>
  <Footer/>
  </>
}

App.propTypes = {
  Component: PropTypes.elementType,
};

export default wrapper.withRedux(withReduxSaga(App));
