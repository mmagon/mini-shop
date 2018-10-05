/**
 *
 * ProductAdd
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { injectIntl, intlShape } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import { notify } from 'containers/App/actions';

import ContentWrapper from 'components/ContentWrapper';
import PageTitle from 'components/PageTitle';
import InfoMessageView from 'components/InfoMessageView';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Input from 'components/Input/Magical';
import ProductImageUploader from 'components/ProductImageUploader';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectProductAdd from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { changeName, changePrice, changeImage } from './actions';

const ProductAddWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  margin: 0 auto;
  overflow-y: auto;
`;

const Uploader = styled.div`
  margin: 2rem 2rem;
`;

/* eslint-disable react/prefer-stateless-function */
export class ProductAdd extends React.PureComponent {
  render() {
    const { loading, image_uploading, data, error } = this.props.productadd;
    const { name, price, image } = data;
    console.log(data);
    let name_error = '';
    let price_error = '';
    if (!!error && !!error.errors) {
      const { errors } = error;
      if (errors.name) {
        name_error = errors.name.msg;
      }
      if (errors.price) {
        price_error = errors.password.msg;
      }
    }

    const msg_data = {
      message: error,
      type: 'error',
    };
    return (
      <ContentWrapper>
        <Helmet>
          <title> Add Products</title>
          <meta name="description" content="Description of Products" />
        </Helmet>
        <PageTitle title="Add Product" goBack={this.props.history.goBack} />
        <ProductAddWrapper>
          <form noValidate>
            {error ? <InfoMessageView data={msg_data} /> : ''}
            <Input
              id="name"
              name="name"
              field_error={name_error}
              label={this.props.intl.formatMessage(messages.name)}
              type="text"
              value={name || ''}
              onChange={this.props.onChangeName}
              placeholder={this.props.intl.formatMessage(messages.name)}
            />
            <Input
              id="price"
              name="price"
              field_error={price_error}
              label={this.props.intl.formatMessage(messages.price)}
              type="number"
              value={price || ''}
              onChange={this.props.onChangePrice}
              placeholder={this.props.intl.formatMessage(messages.price)}
            />
            <Uploader>
              <ProductImageUploader
                image={image.preview}
                onFileDrop={this.props.onImageFileDrop}
                onFileDropRejected={this.props.onImageFileDropRejected}
                uploading={image_uploading}
              />
            </Uploader>

            <Button className="fluid" onClick={this.props.onAddProduct}>
              {loading ? <Loader /> : 'Submit'}
            </Button>
          </form>
        </ProductAddWrapper>
      </ContentWrapper>
    );
  }
}

ProductAdd.propTypes = {
  dispatch: PropTypes.func.isRequired, //eslint-disable-line
  intl: intlShape.isRequired,
  loading: PropTypes.bool,
  history: PropTypes.object,
  productadd: PropTypes.object,
  onImageFileDrop: PropTypes.func,
  onImageFileDropRejected: PropTypes.func,
  onChangeName: PropTypes.func,
  onChangePrice: PropTypes.func,
  onAddProduct: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  productadd: makeSelectProductAdd(),
});

function mapDispatchToProps(dispatch) {
  return {
    onImageFileDrop: (file, info) => {
      console.log(info);
      if (info.size > 3984588) {
        const data = { message: 'File size must not exceed to 3.8MB' };
        dispatch(notify(data));
      } else {
        dispatch(changeImage(file, info));
      }
    },
    onImageFileDropRejected: (file, info) => { // eslint-disable-line
      console.log('some files are rejected');
    },
    onChangeName: evt => {
      const name = evt.target.value;
      dispatch(changeName(name));
    },
    onChangePrice: evt => {
      const price = evt.target.value;
      dispatch(changePrice(price));
    },
    onAddProduct: () => {
      console.log('add now');
    },
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'productAdd', reducer });
const withSaga = injectSaga({ key: 'productAdd', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(injectIntl(ProductAdd));
