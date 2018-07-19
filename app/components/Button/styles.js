import { css } from 'styled-components';

const buttonStyles = css`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.45rem 2rem;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  background-color: #3aafa9;
  color: #fff;
  &.fluid {
    width: calc(100% - 2rem);
  }
  &.nav-link {
    padding: 1rem 2rem;
    background: transparent;
    &:active {
      background: transparent;
    }
    &:hover {
      background: transparent;
    }
  }
  &:active {
    background: #2fa09b;
    color: #fff;
  }
`;

export default buttonStyles;
