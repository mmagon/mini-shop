/**
 *
 * ProductImageUploader
 *
 */

import React from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */

const Wrapper = styled.div`
  .uploader {
    position: relative;
    height: 350px;
    border-radius: 2px;
    background-size: cover;
    background-position: center;
    background-image: url(http://hdimages.org/wp-content/uploads/2017/03/placeholder-image4.jpg);
  }
`;
export const processSelectedFiles = handler => accepted_files => {
  accepted_files.forEach(file => {
    const reader = new FileReader();
    reader.onload = () => handler(reader.result, file);

    reader.readAsDataURL(file);
  });
};

class ProductImageUploader extends React.Component {
  render() {
    const { uploading, onFileDrop, onFileDropRejected } = this.props;
    let { image } = this.props;
    if (image) {
      image = `url(${image})`;
    }
    return (
      <Wrapper>
        <Dropzone
          disabled={uploading}
          style={{
            backgroundImage: image,
          }}
          className="uploader"
          multiple={false}
          accept="image/png,image/jpeg,image/jpg"
          onDrop={processSelectedFiles(onFileDrop)}
          onDropRejected={onFileDropRejected}
        />
      </Wrapper>
    );
  }
}
ProductImageUploader.propTypes = {
  uploading: PropTypes.bool,
  image: PropTypes.string,
  onFileDrop: PropTypes.func,
  onFileDropRejected: PropTypes.func,
};

export default ProductImageUploader;
