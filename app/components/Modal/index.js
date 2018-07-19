/**
 *
 * Modal
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import ReactModal from 'react-responsive-modal';
import './styles.css';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Modal extends React.Component {
  render() {
    const { isOpen, onClose } = this.props;
    return (
      <ReactModal
        open={isOpen}
        onClose={onClose(isOpen)}
        center
        closeOnOverlayClick={false}
        classNames={{
          overlay: 'custom-overlay',
          modal: 'custom-modal',
          closeButton: 'custom-button',
        }}
      >
        {this.props.children}
      </ReactModal>
    );
  }
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
};

export default Modal;
