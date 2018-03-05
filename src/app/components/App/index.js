import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Home from '~screens/Home';

import Sidebar from '~components/Sidebar';

const routes = {
  Home
};

const App = ({ route }) => {
  const Route = routes[route];
  return (
    <Fragment>
      <Route />
      <Sidebar />
    </Fragment>
  );
};

App.propTypes = {
  route: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  route: state.routes
});

export default connect(mapStateToProps)(App);
