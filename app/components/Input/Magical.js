/**
 *
 * Input
 *
 * A common text and password input
 */

import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './MagicalWrapper';

function Input(props) {
  const classes = [];

  // If the input is filled, add proper styling to move
  // label up and make way for value
  if (props.value) classes.push('filled');

  // If we have errors, add proper styling
  if (props.field_error) classes.push('has-error');

  return (
    // If we have errors, add proper styling
    <Wrapper className={props.field_error ? 'has-error' : ''}>
      <input
        id={props.id}
        autoComplete={props.auto_complete}
        name={props.name}
        type={props.type}
        onChange={e => {
          props.onChange(e);
        }}
        value={props.value}
        className={classes.join(' ')}
        maxLength={props.maxLength}
      />
      <label htmlFor={props.id}>
        <span>{props.field_error || props.label}</span>
      </label>
    </Wrapper>
  );
}

Input.propTypes = {
  auto_complete: PropTypes.string,
  field_error: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  maxLength: PropTypes.string,
};

Input.defaultProps = {
  auto_complete: 'new-password',
};

export default Input;
