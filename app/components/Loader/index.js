/**
 *
 * Loader
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

const LoaderContainer = styled.div`
  display: inherit;
  width: 10%;
`;
/* eslint-disable react/prefer-stateless-function */
class LoadingIndicator extends React.Component {
  render() {
    return (
      <LoaderContainer>
        <Loader type="ThreeDots" color="#17252a" height="100%" width="100%" />
      </LoaderContainer>
    );
  }
}

Loader.propTypes = {};

export default LoadingIndicator;
