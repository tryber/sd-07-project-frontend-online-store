import React from 'react';
import { Link } from 'react-router-dom';
import CartItens from './CartItens';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    };
  }

  componentDidMount() {
    this.ItemsFromStorage();
  }

  ItemsFromStorage() {
    const localStorageItens = localStorage.getItem('cartItems');
    const convertedArrayFromLocalStorage = JSON.parse(localStorageItens);
    this.setState({
      cartItems: convertedArrayFromLocalStorage,
    });
  }

  render() {
    const { cartItems } = this.state;
    if (!cartItems) {
      return (
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>
      );
    }

    return (
      <div>
        <Link to="/">
          <svg width="1.8em" viewBox="0 0 16 16" className="bi bi-arrow-return-left" xmlns="http://www.w3.org/2000/svg" >
            <path fillRule="evenodd"
              d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 
              0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"
            />
          </svg>
        </Link>
        <div className="shopping-cart-title" >
          <svg width="1.8em" viewBox="0 0 16 16" className="bi bi-cart3" xmlns="http://www.w3.org/2000/svg" >
            <path fillRule="evenodd"
              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 
                1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 
                0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
            />
          </svg>
          <h2>Carrinho de Compras</h2>
        </div>
        <div>
          <div>
            {cartItems.map((item) => <CartItens key={ item.id } item={ item } />)}
          </div>
        </div>
        <h2>Valor Total da Compra:</h2>

        <Link to="/cart/checkout" data-testid="checkout-products">
          <button onclick={ console.log('incrementar') }>Finalizar Compra</button>
        </Link>

      </div>
    );
  }
}

export default ShoppingCart;
