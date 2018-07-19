/**
 *
 * InfoMessageView
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Wrapper from './Wrapper';
/* eslint-disable react/prefer-stateless-function */
class InfoMessageView extends React.Component {
  render() {
    const { data } = this.props;
    return <Wrapper>{data.message}</Wrapper>;
  }
}

InfoMessageView.propTypes = {
  data: PropTypes.object,
};

export default InfoMessageView;
