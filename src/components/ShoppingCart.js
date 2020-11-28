import React from 'react';
import { Link } from 'react-router-dom';
import CartItens from '../components/CartItens';
import GetIcon from './Icons';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cartItems: [],
    }
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
          <GetIcon name="ReturnArrowIcon" />
        </Link>
        <div className="shopping-cart-title">
          <GetIcon name="ShoppingCartIcon" />
          <h2>Carrinho de Compras</h2>
        </div>
        <div>
          <div>
          {cartItems
            .map((item) => <CartItens key={item.id} item={item} />)}</div>
        </div>
        <h2>Valor Total da Compra:</h2>
        <button>Finalizar Compra</button>
      </div>
    );
  }
}

export default ShoppingCart;
