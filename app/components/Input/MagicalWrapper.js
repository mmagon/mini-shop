import styled from 'styled-components';

const MagicalWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: inline-block;
  margin: 1rem 1rem 1rem;
  width: calc(100% - 2rem);
  vertical-align: top;
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus input:-webkit-autofill,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: none;
    box-shadow: none;
    outline: none;
    -webkit-box-shadow: 0 0 0px 1000px #fafafa inset;
  }
  > label {
    display: inline-block;
    float: right;
    padding: 0 0.8rem;
    width: 100%;
    color: #6a7989;
    cursor: text;
    font-weight: bold;
    font-size: 1.3rem;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #fff;
      -webkit-transform-origin: 50% 100%;
      transform-origin: 50% 100%;
      -webkit-transition: -webkit-transform 0.3s;
      transition: transform 0.3s;
    }
    > i,
    > span {
      display: block;
      padding: 1.2rem 0;
      position: relative;
      width: 100%;
      -webkit-transform-origin: 0% 50%;
      transform-origin: 0% 50%;
      -webkit-transition: -webkit-transform 0.3s;
      transition: transform 0.3s;
    }
    > i {
      color: #ddd;
      font-size: 150%;
    }
  }
  > input {
    background: #fafafa;
    border: none;
    border-radius: 0;
    color: #7f8994;
    display: block;
    float: right;
    font-size: 1.4rem;
    height: calc(100% - 1.5rem);
    left: 4px;
    opacity: 0;
    margin: 0;
    padding: 0 0.55rem;
    position: absolute;
    bottom: 0.25rem;
    width: calc(100% - 0.5rem);
    z-index: 100;
    -webkit-appearance: none; /* for box shadows to show on iOS */
    -webkit-transform: scale3d(1, 0, 1);
    transform: scale3d(1, 0, 1);
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
    transition: opacity 0.3s, transform 0.3s;
    &.has-error,
    &:focus,
    &.filled {
      background: #fafafa;
      border: none;
      box-shadow: none;
      opacity: 1;
      outline: none;
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
      + label {
        padding: 0 0.28rem;
        &::before {
          cursor: default;
          pointer-events: none;
        }
        > i,
        > span {
          -webkit-transform: translate3d(0, -1.6rem, 0) scale3d(0.6, 0.6, 1);
          transform: translate3d(0, -1.6rem, 0) scale3d(0.6, 0.6, 1)
            translateZ(1px);
        }
      }
    }
  }
  &.has-error {
    > label {
      color: #c00;
      &::before {
        box-shadow: 0 0 1rem rgba(255, 0, 0, 0.2);
      }
    }
  }
`;

export default MagicalWrapper;
