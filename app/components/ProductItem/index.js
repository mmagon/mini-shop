/**
 *
 * ProductItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ProductImage from 'components/ProductImage';
import NavLink from 'components/NavLink';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const ProductItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  color: #000;
  padding: 10px;
  font-size: 30px;
  width: 100%;
  height: 15rem;
  box-shadow: 2px 5px 6px rgba(0, 0, 0, 0.16);
  margin-bottom: 3px;

  .product-image {
    width: 40%;
    height: 100%;
    margin: 0 auto;
    padding: 0.5rem;
  }
  .product-details {
    width: 60%;
    padding-left: 2rem;
    .product-name {
      margin: 10px 0px 10px 10px;
      color: #3aafa9;
      font-size: 2.5rem;
      button {
        cursor: pointer;
      }
    }
    .product-price {
      width: 50%;
      margin: 10px;
    }
  }
`;

/* eslint-disable react/prefer-stateless-function */
class ProductItem extends React.Component {
  render() {
    const { name, price, image, id, disableLink } = this.props;
    return (
      <ProductItemWrapper>
        <div className="product-image">
          <ProductImage image={`http://${image}`} />
        </div>
        <div className="product-details">
          <div className="product-name">
            <NavLink
              to={`/product/view/${id}`}
              onClick={disableLink ? e => e.preventDefault() : () => {}}
            >
              {name}
            </NavLink>
          </div>
          <div className="product-price">{price}</div>
        </div>
      </ProductItemWrapper>
    );
  }
}

ProductItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  id: PropTypes.string,
  disableLink: PropTypes.bool,
};

export default ProductItem;
