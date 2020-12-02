import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Footer, Header, Main, Wrapper } from './style';
import Button from '../Button';

function DefaultWrapper(props) {
  const { wrapperInfo, children, render } = props;

  return (
    <Wrapper>
      <Header>
        {wrapperInfo.title}
        <Button as={ Link } to={ wrapperInfo.closeButtonLink }>
          FECHAR
        </Button>
      </Header>

      <Main>
        {children}
      </Main>

      <Footer>
        {render && render}
      </Footer>
    </Wrapper>
  );
}

DefaultWrapper.propTypes = {
  render: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  wrapperInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    showHeaderButton: PropTypes.bool.isRequired,
    closeButtonLink: PropTypes.string.isRequired,
  }).isRequired,
};

export default DefaultWrapper;
