import React from 'react';
import { FormattedMessage } from 'react-intl';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <div>
        <NavBar>
          <div>
            <HeaderLink to="/">
              <FormattedMessage {...messages.brand} />
            </HeaderLink>
          </div>
          <div>
            <HeaderLink to="/features">
              <FormattedMessage {...messages.login} />
            </HeaderLink>
            <HeaderLink to="/features">
              <FormattedMessage {...messages.signup} />
            </HeaderLink>
          </div>
        </NavBar>
      </div>
    );
  }
}

export default Header;
