import React from 'react';
import CartItens from '../components/CartItens'

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
        {cartItems
          .map((item) => <CartItens key={item.id} item={item} />)}
      </div>
    );
  }
}

export default ShoppingCart;
