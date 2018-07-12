/**
 *
 * ProductImage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
const ImageWrapper = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
class ProductImage extends React.Component {
  render() {
    const { image } = this.props;
    return <ImageWrapper src={image} />;
  }
}

ProductImage.propTypes = {
  image: PropTypes.string,
};

export default ProductImage;
