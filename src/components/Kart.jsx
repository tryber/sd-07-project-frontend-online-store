import React from 'react';
import './InitialScreen.css';
import PropTypes from 'prop-types';

class Kart extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'Seu carrinho está vazio',
    };
  }

  render() {
    const { shoppingKart } = this.props;
    const { message } = this.state;
    const messageEmptyKart = <h1 data-testid="shopping-cart-empty-message">{message}</h1>;
    const renderProducts = shoppingKart.map(({ title, thumbnail, price, id }) => (
      <div key={ id }>
        <h1 data-testid="shopping-cart-product-name">{ title }</h1>
        <img src={ thumbnail } alt={ title } />
        <span data-testid="shopping-cart-product-quantity">
          { `Quantidade: ${1}` }
        </span>
        <span>{ price }</span>
      </div>
    ));

    return (
      <div className="kart">
        {shoppingKart.length ? renderProducts : messageEmptyKart}
      </div>
    );
  }
}

Kart.propTypes = {
  shoppingKart: PropTypes.func.isRequired,
};

export default Kart;
