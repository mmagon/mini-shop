/**
 *
 * LoginModal
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { injectIntl, intlShape } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { clickModal } from 'containers/App/actions';
import {
  changeEmail,
  changePassword,
  login,
} from 'containers/LoginModal/actions';

import Modal from 'components/Modal';
import Input from 'components/Input/Magical';
import Button from 'components/Button';
import Loader from 'components/Loader';
import InfoMessageView from 'components/InfoMessageView';

import { makeSelectModal } from 'containers/App/selectors';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLoginModal from './selectors';
import reducer from './reducer';
import saga from './saga';
import Wrapper from './styles';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class LoginModal extends React.PureComponent {
  render() {
    const { loginmodal, modal, onClickModal } = this.props;
    const { error, data, loading } = loginmodal;
    const { email, password } = data;
    let email_error = '';
    let password_error = '';
    if (!!error && !!error.errors) {
      const { errors } = error;
      if (errors.email) {
        email_error = errors.email.msg;
      }
      if (errors.password) {
        password_error = errors.password.msg;
      }
    }
    const msg_data = {
      message: error,
      type: 'error',
    };
    return (
      <Modal
        isOpen={modal.status && modal.name === 'login'}
        onClose={onClickModal}
      >
        <Wrapper>
          <div className="modal-title">Login</div>
          <div className="modal-body">
            <form noValidate>
              {error ? <InfoMessageView data={msg_data} /> : ''}
              <Input
                id="email"
                name="email"
                field_error={email_error}
                label={this.props.intl.formatMessage(messages.email)}
                type="text"
                value={email || ''}
                onChange={this.props.onChangeEmail}
                placeholder={this.props.intl.formatMessage(messages.email)}
              />
              <Input
                id="password"
                name="password"
                field_error={password_error}
                label={this.props.intl.formatMessage(messages.password)}
                type="password"
                value={password || ''}
                onChange={this.props.onChangePassword}
                placeholder={this.props.intl.formatMessage(messages.password)}
              />
              <Button
                type="submit"
                className="fluid"
                onClick={this.props.submitLogin(data, modal)}
              >
                {loading ? <Loader /> : 'Submit'}
              </Button>
            </form>
          </div>
        </Wrapper>
      </Modal>
    );
  }
}

LoginModal.propTypes = {
  dispatch: PropTypes.func.isRequired, //eslint-disable-line
  intl: intlShape.isRequired,
  modal: PropTypes.object,
  loginmodal: PropTypes.object,
  onClickModal: PropTypes.func,
  onChangeEmail: PropTypes.func,
  onChangePassword: PropTypes.func,
  submitLogin: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loginmodal: makeSelectLoginModal(),
  modal: makeSelectModal(),
});

function mapDispatchToProps(dispatch) {
  return {
    onClickModal: modal => () => {
      dispatch(clickModal(!modal));
    },
    onChangeEmail: evt => {
      const email = evt.target.value;
      dispatch(changeEmail(email));
    },
    onChangePassword: evt => {
      const password = evt.target.value;
      dispatch(changePassword(password));
    },
    submitLogin: (data, modal) => () => {
      dispatch(login(data, !modal));
    },
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'loginModal', reducer });
const withSaga = injectSaga({ key: 'loginModal', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(injectIntl(LoginModal));
