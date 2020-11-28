import React, { Component } from 'react';
import ProductCart from '../Components/ProductCart';

class ShoppingCartPage extends Component {
  constructor(props) {
    super(props);

    this.increaseItem = this.increaseItem.bind(this);
    this.decreaseItem = this.decreaseItem.bind(this);

    this.state = {
      shoppingCartItems: [],
    };
  }

  componentDidMount() {
    this.getProductsFromLocalStorage();
  }

  getProductsFromLocalStorage() {
    const shoppingCartItems = JSON.parse(localStorage.getItem('shoppingCartItems'));
    this.setState({
      shoppingCartItems,
    });
  }

  increaseItem(id) {
    const { shoppingCartItems } = this.state;
    shoppingCartItems.find((item) => item.id === id)
      .quantity += 1;
    this.setState({
      shoppingCartItems,
    });
  }

  decreaseItem(id) {
    const zero = 0;
    const { shoppingCartItems } = this.state;
    const { quantity } = shoppingCartItems.find((item) => item.id === id);
    if (quantity > zero) {
      shoppingCartItems.find((item) => item.id === id)
        .quantity -= 1;
      this.setState({
        shoppingCartItems,
      });
    }
  }

  totalPrice() {
  }

  render() {
    const empty = 0;
    const { shoppingCartItems } = this.state;
    if (shoppingCartItems.length === empty) {
      return (
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      );
    }
    return (
      <div>
        <div>
          {shoppingCartItems.map((item) => (
            <ProductCart
              key={ item.id }
              product={ item }
              increaseItem={ this.increaseItem }
              decreaseItem={ this.decreaseItem }
            />
          ))}
        </div>
        <div>
          Valor Total da Compra R$
          {/* estado total price */}
        </div>
        <button type="button">Finalizar Compra</button>
      </div>
    );
  }
}

export default ShoppingCartPage;
