import styled from 'styled-components';

// import { secondary_color } from 'global-styles';

const Wrapper = styled.div`
  border-bottom: 1px solid #f5f5f5;
  position: relative;
  label {
    color: #999;
    font-size: 0.7rem;
    font-weight: 800;
    letter-spacing: 0.1rem;
    margin-top: 0.8rem;
    padding-left: 1rem;
    padding-right: 1rem;
    text-transform: uppercase;
    div {
      color: #111;
      font-size: 1rem;
      font-weight: 300;
      letter-spacing: 0;
      text-transform: none;
      &.rbt {
        margin-left: -0.3rem;
        width: calc(100% + 0.3rem);
      }
      .rbt-input-main {
        margin-left: 0.3rem;
      }
      .rbt-token {
        background: #c9b3de;
        border: 0.0625rem solid #ae96c5;
        border-radius: 0.2rem;
        display: inline-block;
        margin-top: 0.3rem;
        margin-left: 0.3rem;
        padding: 0.3rem 0.5rem;
        .rbt-token-close-button {
          margin-left: 0.3rem;
        }
      }
    }
  }
  select {
    color: #333;
    font-size: 1rem;
    line-height: 1.5rem;
  }
  input,
  input:active,
  input:focus,
  select,
  select:active,
  select:focus,
  textarea {
    background: #fff;
    border: none;
    box-shadow: none;
    margin: 0 0 0.2rem;
    padding-left: 0;
    padding-right: 0;
    ~ span {
      color: #555;
    }
  }
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
    -webkit-box-shadow: 0 0 0px 62.5rem #fff inset;
  }
  input,
  select,
  textarea,
  .form-control {
    min-height: 2.45rem;
    + .focus-indicator {
      background-color: rgba(255, 255, 255, 0);
      bottom: -0.2rem;
      display: block;
      height: 0.0625rem;
      left: 50%;
      position: absolute;
      transition: all 200ms linear;
      width: 0rem;
    }
    &:focus,
    &.focus {
      color: #000;
      + .focus-indicator {
        background-color: #000;
        bottom: 0rem;
        left: 0;
        width: 100%;
      }
    }
  }
  .form-control + .focus-indicator {
    height: 0.0625rem;
  }
  .Select--single {
    .Select-control {
      border-radius: 0;
      border: none;
      .Select-input,
      .Select-placeholder {
        padding-left: 0;
        padding-right: 0;
      }
      .Select-value {
        padding-left: 0;
      }
      .Select-arrow-zone {
        padding-right: 0;
        width: 0.8rem;
      }
    }
    .Select-menu-outer {
      border-radius: 0.2rem;
      bottom: 100%;
    }
  }
  &.g6-textarea {
    textarea {
      color: #222;
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
  &.required {
    > label > span:after {
      content: '*';
      color: #c00;
      display: inline-block;
      margin-top: -0.2rem;
      vertical-align: top;
    }
  }
  &.has-error {
    > label {
      color: #c00;
    }
  }
  .Select-control {
    border-radius: 0;
    border: none;
    .Select-value {
      padding: 0 0.8rem 0 0;
    }
    .Select-arrow-zone {
      padding-right: 0;
      width: 0.8rem;
    }
  }
  .Select-menu-outer {
    border-radius: 0.2rem;
    top: -10rem;
    overflow-y: auto;
  }
`;

export default Wrapper;
