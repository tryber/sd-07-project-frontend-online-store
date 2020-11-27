import React from 'react';
import ReturnButton from '../Components/ReturnButton';

class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        <ReturnButton path="/" />
        {localStorage.length === undefined ? (
          <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>
        ) : (
          Object.keys(localStorage).map((key) => (
            <div key={ key }>
              <p data-testid="shopping-cart-product-name">{key}</p>
              <p
                data-testid="shopping-cart-product-quantity"
              >
                {localStorage.getItem(key)}
              </p>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default ShoppingCart;
