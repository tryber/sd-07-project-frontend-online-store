import React from 'react';
import { Link } from 'react-router-dom';

import DefaultWrapper from '../../components/DefaultWrapper';
import Cart from '../../components/Cart';
import Button from '../../components/Button';

const detailPage = {
  title: 'Carrinho de compras',
  showHeaderButton: false,
  closeButtonLink: '/',
};

const button = <Button as={Link} to="/checkout" data-testid="checkout-products">Comprar</Button>;

function CartPage() {
  return (
    <DefaultWrapper wrapperInfo={detailPage} render={button}>
      <Cart />
    </DefaultWrapper>
  );
}

export default CartPage;
