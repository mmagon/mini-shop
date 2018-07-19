/**
 *
 * SignupModal
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { injectIntl, intlShape } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Modal from 'components/Modal';
import Input from 'components/Input/Magical';
import Button from 'components/Button';
import Loader from 'components/Loader';
import InfoMessageView from 'components/InfoMessageView';

import { clickModal } from 'containers/App/actions';
import {
  changeFirstName,
  changeLastName,
  changeEmail,
  changePassword,
  signup,
} from 'containers/SignupModal/actions';
import { makeSelectModal } from 'containers/App/selectors';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSignupModal from './selectors';
import reducer from './reducer';
import saga from './saga';
import Wrapper from './styles';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class SignupModal extends React.PureComponent {
  render() {
    const { signupmodal, modal, onClickModal } = this.props;
    const { error, data, loading } = signupmodal;
    const { first_name, last_name, email, password } = data;

    let first_name_error = '';
    let last_name_error = '';
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
      if (errors.first_name) {
        first_name_error = errors.first_name.msg;
      }
      if (errors.last_name) {
        last_name_error = errors.last_name.msg;
      }
    }
    const msg_data = {
      message: error,
      type: 'error',
    };

    return (
      <Modal
        isOpen={modal.status && modal.name === 'signup'}
        onClose={onClickModal}
      >
        <Wrapper>
          <div className="modal-title">Signup</div>
          <div className="modal-body">
            <form noValidate>
              {error ? <InfoMessageView data={msg_data} /> : ''}
              <Input
                id="first_name"
                name="first_name"
                field_error={first_name_error}
                label={this.props.intl.formatMessage(messages.first_name)}
                type="text"
                value={first_name || ''}
                onChange={this.props.onChangeFirstName}
                placeholder={this.props.intl.formatMessage(messages.first_name)}
              />
              <Input
                id="last_name"
                name="last_name"
                field_error={last_name_error}
                label={this.props.intl.formatMessage(messages.last_name)}
                type="text"
                value={last_name || ''}
                onChange={this.props.onChangeLastName}
                placeholder={this.props.intl.formatMessage(messages.last_name)}
              />
              <Input
                id="email"
                name="email"
                field_error={email_error}
                label={this.props.intl.formatMessage(messages.email)}
                type="email"
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
                onClick={this.props.submitSignup(data, modal)}
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

SignupModal.propTypes = {
  dispatch: PropTypes.func.isRequired, //eslint-disable-line
  intl: intlShape.isRequired,
  modal: PropTypes.object,
  signupmodal: PropTypes.object,
  onClickModal: PropTypes.func,
  onChangeLastName: PropTypes.func,
  onChangeFirstName: PropTypes.func,
  onChangeEmail: PropTypes.func,
  onChangePassword: PropTypes.func,
  submitSignup: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  signupmodal: makeSelectSignupModal(),
  modal: makeSelectModal(),
});

function mapDispatchToProps(dispatch) {
  return {
    onClickModal: modal => () => {
      dispatch(clickModal(!modal));
    },
    onChangeFirstName: evt => {
      const first_name = evt.target.value;
      dispatch(changeFirstName(first_name));
    },
    onChangeLastName: evt => {
      const last_name = evt.target.value;
      dispatch(changeLastName(last_name));
    },
    onChangeEmail: evt => {
      const email = evt.target.value;
      dispatch(changeEmail(email));
    },
    onChangePassword: evt => {
      const password = evt.target.value;
      dispatch(changePassword(password));
    },
    submitSignup: (data, modal) => () => {
      dispatch(signup(data, !modal));
    },
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'signupModal', reducer });
const withSaga = injectSaga({ key: 'signupModal', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(injectIntl(SignupModal));
