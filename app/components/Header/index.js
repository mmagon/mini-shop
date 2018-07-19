import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Button from 'components/Button';
import NavLink from './NavLink';
import NavBar from './NavBar';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    const { onClickLogin, modalStatus, isLogged, user } = this.props;
    let button_text = '';
    let button_click = () => {};
    if (user !== '' && isLogged) {
      button_text = user;
    } else {
      button_click = onClickLogin(modalStatus, 'signup');
      button_text = 'Signup';
    }
    return (
      <NavBar>
        <NavLink>
          <Button className="nav-link" to="/">
            <FormattedMessage {...messages.brand} />
          </Button>
        </NavLink>
        <NavLink>
          <Button className="nav-link" onClick={button_click}>
            {button_text}
          </Button>
          <Button
            className="nav-link"
            onClick={onClickLogin(modalStatus, 'login')}
          >
            {isLogged ? 'Logout' : 'Login'}
          </Button>
        </NavLink>
      </NavBar>
    );
  }
}

Header.propTypes = {
  onClickLogin: PropTypes.func, //eslint-disable-line
  modalStatus: PropTypes.bool, //eslint-disable-line
  isLogged: PropTypes.bool, //eslint-disable-line
  user: PropTypes.string, //eslint-disable-line
};

export default Header;
