/**
 *
 * Notifier
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 1rem 0;
`;
/* eslint-disable react/prefer-stateless-function */
class Notifier extends React.Component {
  render() {
    const { message } = this.props;
    return (
      <Wrapper>
        <div>{message}</div>
      </Wrapper>
    );
  }
}

Notifier.propTypes = {
  message: PropTypes.string,
};

export default Notifier;
