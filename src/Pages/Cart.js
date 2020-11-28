import React from 'react';
/* import PropTypes from 'prop-types'; */

class Cart extends React.Component {
  render() {
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <img
          className="box-empty"
          src="https://image.flaticon.com/icons/png/512/15/15457.png"
          alt="caixa fazia"
        />
      </div>
    );
  }
}

/* Cart.propTypes = {
  products: PropTypes.objectOf.isRequired,
}; */

export default Cart;
