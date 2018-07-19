/**
 *
 * Home
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Products from 'containers/Products/Loadable';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectHome from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class Home extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Description of Home" />
        </Helmet>
        <Products />
      </div>
    );
  }
}

Home.propTypes = {};

const mapStateToProps = createStructuredSelector({
  home: makeSelectHome(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Home);
