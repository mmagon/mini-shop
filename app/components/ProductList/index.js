/**
 *
 * ProductList
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function ProductList() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

ProductList.propTypes = {};

export default ProductList;
