/**
 *
 * PageTitle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 2rem;
  font-weight: bold;
  background-color: #3aafa9;
  padding: 10px 8px;
  box-shadow: 0 3px 0 rgba(23, 37, 42, 0.2);
  color: #fff;
  height: 4.5rem;
`;
/* eslint-disable react/prefer-stateless-function */
class PageTitle extends React.Component {
  render() {
    const { title, goBack } = this.props;
    return (
      <Wrapper>
        <div className="">
          <Button onClick={goBack}>{'<-'}</Button>
        </div>
        <div className="">{title}</div>
      </Wrapper>
    );
  }
}

PageTitle.propTypes = {
  title: PropTypes.string,
  goBack: PropTypes.func,
};

export default PageTitle;
