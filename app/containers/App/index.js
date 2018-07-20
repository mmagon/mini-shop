/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import PropTypes, { instanceOf } from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { withCookies, Cookies } from 'react-cookie';
import { Switch, Route, withRouter } from 'react-router-dom';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';
import _ from 'lodash';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import app_config from 'config/app.json';

import Notifier from 'components/Notifier';
import Home from 'containers/Home/Loadable';
import ProductView from 'containers/ProductView/Loadable';
import ProductAdd from 'containers/ProductAdd/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import LoginModal from 'containers/LoginModal/Loadable';
import SignupModal from 'containers/SignupModal/Loadable';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
  makeSelectSessionToken,
  makeSelectModal,
  makeSelectUserData,
  makeSelectLastAction,
  makeSelectUserNotifications,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import {
  clickModal,
  setToken,
  currentUser,
  logout,
  notifyClear,
} from './actions';
import { LOGOUT } from './constants';
import './styles.css';
// import messages from './messages';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0;
`;

/* eslint-disable react/prefer-stateless-function */

export class App extends React.PureComponent {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };
  componentWillMount() {
    const token = this.props.cookies.get(`${app_config.name}.token`);
    if (token) {
      this.props.getCurrentUser(token);
      this.props.setUserToken(token);
    }
  }

  componentWillReceiveProps(nxt_props) {
    if (
      nxt_props.notifications !== this.props.notifications &&
      this.props.notifications === ''
    ) {
      toast(<Notifier message={nxt_props.notifications} />, {
        autoClose: 3000,
        className: 'background-black',
        onOpen: this.props.onCloseNotify,
      });
    }

    const { last_action, cookies, token, user } = nxt_props;
    const cookie_options = {
      expires: new Date(),
      path: '/',
    };
    if (
      last_action === LOGOUT &&
      nxt_props.user.last_action !== this.props.user.last_action
    ) {
      window.location.reload();
      cookies.set(`${app_config.name}.token`, undefined, cookie_options);
      cookies.remove(`${app_config.name}.token`);
    } else if (
      token &&
      !!user.data.token_expire &&
      nxt_props.token !== this.props.token
    ) {
      cookie_options.expires = new Date(user.data.token_expire);
      cookies.set(`${app_config.name}.token`, token, cookie_options);
    }
  }

  render() {
    const { modal, token, user } = this.props;
    let name = '';
    if (!_.isEmpty(user.data)) {
      name = user.data.first_name;
    }
    return (
      <AppWrapper>
        <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="React.js Boilerplate"
        >
          <meta
            name="description"
            content="A React.js Boilerplate application"
          />
        </Helmet>
        <Header
          isLogged={!!token}
          user={name}
          onClickLogin={
            !token ? this.props.onClickModal : this.props.onClickLogout
          }
          modalStatus={modal.status}
        />
        <LoginModal />
        <SignupModal />
        <ToastContainer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product/add" component={ProductAdd} />
          <Route exact path="/product/view/:id" component={ProductView} />
          <Route path="/features" component={FeaturePage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        <Footer />
      </AppWrapper>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired, //eslint-disable-line
  token: PropTypes.any,
  onClickModal: PropTypes.func,
  getCurrentUser: PropTypes.func,
  onClickLogout: PropTypes.func,
  setUserToken: PropTypes.func,
  onCloseNotify: PropTypes.func,
  modal: PropTypes.object,
  user: PropTypes.object,
  notifications: PropTypes.string,
};

function mapDispatchToProps(dispatch) {
  return {
    onClickModal: (modal, name) => () => {
      dispatch(clickModal(!modal, name));
    },
    setUserToken: token => {
      dispatch(setToken(token));
    },
    getCurrentUser: token => {
      dispatch(currentUser(token));
    },
    onClickLogout: () => () => {
      dispatch(logout());
    },
    onCloseNotify: () => {
      dispatch(notifyClear());
    },
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  token: makeSelectSessionToken(),
  user: makeSelectUserData(),
  modal: makeSelectModal(),
  last_action: makeSelectLastAction(),
  notifications: makeSelectUserNotifications(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'global', reducer });
const withSaga = injectSaga({ key: 'global', saga });

export default compose(
  withCookies,
  withRouter,
  withReducer,
  withSaga,
  withConnect,
)(App);
