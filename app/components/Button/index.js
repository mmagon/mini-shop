/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';

import A from './A';
import NavLink from './Link';
import StyledButton from './Button';
import Wrapper from './Wrapper';

/* eslint-disable react/prefer-stateless-function */
class Button extends React.Component {
  render() {
    const { href, children, onClick, handleRoute, className, to } = this.props;
    // Render an anchor tag
    let button = (
      <A href={href} onClick={onClick} className={className}>
        {Children.toArray(children)}
      </A>
    );

    // If the Button has a handleRoute prop, we want to render a button
    if (handleRoute) {
      button = (
        <StyledButton onClick={handleRoute}>
          {Children.toArray(children)}
        </StyledButton>
      );
    }

    if (to) {
      button = (
        <NavLink to={to} className={className}>
          {Children.toArray(children)}
        </NavLink>
      );
    }

    return <Wrapper>{button}</Wrapper>;
  }
}

Button.propTypes = {
  handleRoute: PropTypes.func,
  href: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
