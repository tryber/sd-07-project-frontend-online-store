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
        {
          // wrapperInfo.showHeaderButton && (
          //   // <Button as={Link} to="/cart" data-testid="shopping-cart-button">
          //   //   Ir para o carrinho
          //   // </Button>
          // )
        }
        <Button as={Link} to={wrapperInfo.closeButtonLink}>
          FECHAR
        </Button>
      </Header>

      <Main>
        {children}
      </Main>

      <Footer>
        {render && render}
      </Footer>
    </Wrapper >
  );
}

DefaultWrapper.propTypes = {
  wrapperInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    showHeaderButton: PropTypes.bool.isRequired,
    closeButtonLink: PropTypes.string.isRequired,
  }).isRequired,
  render: PropTypes.any,
};

export default DefaultWrapper;
