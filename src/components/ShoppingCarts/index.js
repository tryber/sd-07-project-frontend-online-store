import React from 'react';
import {
  Link,
  Switch,
  Route,
} from 'react-router-dom';

import Checkout from '../Checkout';

import {
  ShoppingContainer,
  ShoppingContent,
  BtnIncrease,
} from './styles';

class ShoppingCarts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shopping: JSON.parse(localStorage.getItem('shopping')) || [],
      quantity: 0,
    };
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
  }

  async componentDidMount() {
    await this.updateQuantity();
  }

  async updateQuantity() {
    const { shopping } = this.state;
    const quantity = shopping.reduce((acc, curr) => acc + curr.quantity, 0);
    await this.setState({ quantity });
  }

  async increaseQuantity(event, id) {
    event.preventDefault();
    const { shopping } = this.state;
    const product = shopping.find((cart) => cart.id === id);
    const productsFiltered = shopping.filter((cart) => cart.id !== id);
    if (product.quantity < product.available_quantity) {
      product.quantity += 1;
    }
    localStorage.setItem('shopping', JSON.stringify([...productsFiltered, product]));
    await this.updateQuantity();
  }

  async decreaseQuantity(event, id) {
    event.preventDefault();
    const { shopping } = this.state;
    const product = shopping.find((cart) => cart.id === id);
    const productsFiltered = shopping.filter((cart) => cart.id !== id);
    product.quantity = product.quantity - 1 || 1;
    localStorage.setItem('shopping', JSON.stringify([...productsFiltered, product]));
    await this.updateQuantity();
  }

  render() {
    const { quantity, shopping } = this.state;

    if (!quantity) {
      return (
        <h3 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h3>
      );
    }

    return (
      <ShoppingContainer>
        <ShoppingContent>
          {quantity && (
            <p data-testid="shopping-cart-product-quantity">
              { quantity }
            </p>
          )}
          {shopping.map((cart) => (
            <div key={ cart.id }>
              <h4 data-testid="shopping-cart-product-name">{ cart.title }</h4>
              <button
                data-testid="product-decrease-quantity"
                onClick={ (event) => this.decreaseQuantity(event, cart.id) }
              >
                -
              </button>
              <span>{ cart.quantity }</span>
              <BtnIncrease
                data-testid="product-increase-quantity"
                onClick={ (event) => this.increaseQuantity(event, cart.id) }
              >
                +
              </BtnIncrease>
            </div>
          ))}
          <div>
            <Link to="/shopping/checkout" data-testid="checkout-products">
              finalizar compra
            </Link>
          </div>
          <Switch>
            <Route path="/shopping/checkout" component={ Checkout } />
          </Switch>
        </ShoppingContent>
      </ShoppingContainer>
    );
  }
}

export default ShoppingCarts;
