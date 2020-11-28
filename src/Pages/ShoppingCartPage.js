import React, { Component } from 'react';
import ProductCart from '../Components/ProductCart';

class ShoppingCartPage extends Component {
  constructor(props) {
    super(props);

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
            <ProductCart key={ item.id } product={ item } />
          ))}
        </div>
      </div>
    );
  }
}

export default ShoppingCartPage;
