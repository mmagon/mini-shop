/**
 *
 * Products
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectProducts from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

import ContentWrapper from '../../components/ContentWrapper';
import PageTitle from '../../components/PageTitle';
import ProductItem from '../../components/ProductItem';
import Loader from '../../components/Loader';

import { getProductList } from './actions';

const ProductWrapper = styled.div`
  overflow-y: auto;
  max-height: calc(100vh - 15rem);
`;

/* eslint-disable react/prefer-stateless-function */
export class Products extends React.PureComponent {
  componentDidMount() {
    this.props.getProducts(); //eslint-disable-line
  }
  render() {
    const { products } = this.props; //eslint-disable-line
    const { products_list, loading } = products;
    let mapProducts = [];
    if (loading) {
      mapProducts = <Loader />;
    } else if (products_list.length === 0) {
      mapProducts = <div>no products</div>;
    } else {
      mapProducts = products_list.map(item => (
        <ProductItem
          name={item.name}
          price={item.price}
          image={item.image}
          key={item._id}
          id={item._id}
          disableLink={false}
        />
      ));
    }

    return (
      <ContentWrapper>
        <Helmet>
          <title>Products</title>
          <meta name="description" content="Description of Products" />
        </Helmet>
        <PageTitle title="Products" />
        <ProductWrapper>{mapProducts}</ProductWrapper>
      </ContentWrapper>
    );
  }
}

Products.propTypes = {
  dispatch: PropTypes.func.isRequired, //eslint-disable-line
};

const mapStateToProps = createStructuredSelector({
  products: makeSelectProducts(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getProducts: () => {
      dispatch(getProductList());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'products', reducer });
const withSaga = injectSaga({ key: 'products', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Products);