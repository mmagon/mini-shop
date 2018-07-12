/**
 *
 * ProductView
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
import makeSelectProductView from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

import { getProduct } from './actions';

import ContentWrapper from '../../components/ContentWrapper';
import PageTitle from '../../components/PageTitle';
import Loader from '../../components/Loader';
import ProductItem from '../../components/ProductItem';
const ProductViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
`;

/* eslint-disable react/prefer-stateless-function */
export class ProductView extends React.PureComponent {
  componentDidMount() {
    this.props.viewProduct(this.props.match.params.id); //eslint-disable-line
  }
  render() {
    const { loading, product } = this.props.productview;
    return (
      <ContentWrapper>
        <Helmet>
          <title>Products</title>
          <meta name="description" content="Description of Products" />
        </Helmet>
        <PageTitle title="Product View" goBack={this.props.history.goBack} />
        <ProductViewWrapper>
          {loading ? (
            <Loader />
          ) : (
            <ProductItem
              name={product.name}
              price={product.price}
              image={product.image}
              key={product._id}
              id={product._id}
              disableLink
            />
          )}
        </ProductViewWrapper>
      </ContentWrapper>
    );
  }
}

ProductView.propTypes = {
  dispatch: PropTypes.func.isRequired, //eslint-disable-line
  history: PropTypes.object,
  productview: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  productview: makeSelectProductView(),
});

function mapDispatchToProps(dispatch) {
  return {
    viewProduct: id => {
      dispatch(getProduct(id));
    },
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'productView', reducer });
const withSaga = injectSaga({ key: 'productView', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ProductView);
