/**
 *
 * PageTitle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 2rem;
  font-weight: bold;
  background-color: #3aafa9;
  padding: 10px 8px;
  box-shadow: 0 3px 0 rgba(23, 37, 42, 0.2);
  color: #fff;
  height: 4.5rem;
  .title-nav {
    display: flex;
  }
`;
/* eslint-disable react/prefer-stateless-function */
class PageTitle extends React.Component {
  render() {
    const { title, goBack } = this.props;
    return (
      <Wrapper>
        <div className="title-nav">
          {goBack ? (
            <div className="">
              <Button onClick={goBack}>{'<-'}</Button>
            </div>
          ) : (
            <div />
          )}

          <div className="">{title}</div>
        </div>
        <div className="title-action">
          <Button to="/product/add">+</Button>
        </div>
      </Wrapper>
    );
  }
}

PageTitle.propTypes = {
  title: PropTypes.string,
  goBack: PropTypes.func,
};

export default PageTitle;
