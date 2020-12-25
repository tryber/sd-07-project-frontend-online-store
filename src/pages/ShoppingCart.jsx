import React from 'react';
import { Link } from 'react-router-dom';
import CartItens from '../components/CartItens';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: JSON.parse(localStorage.getItem('cartItems')),
    };
  }

  render() {
    const { cartItems } = this.state;
    if (!cartItems) {
      return (
        <div>
          <Link to="/">
            Home
          </Link>
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        </div>
      );
    }

    return (
      <div>
        <Link to="/">
          Home
        </Link>
        <div className="shopping-cart-title">
          <h2>Carrinho de Compras</h2>
        </div>
        <div>
          <div>
            {cartItems.map((item) => <CartItens key={ item.id } item={ item } />)}
          </div>
        </div>

        <Link
          to={ {
            pathname: '/cart/checkout',
            state: {
              products: cartItems,
            },
          } }
          data-testid="checkout-products"
        >
          <button
            type="button"
          >
            Finalizar Compra
          </button>
        </Link>

      </div>
    );
  }
}

export default ShoppingCart;
