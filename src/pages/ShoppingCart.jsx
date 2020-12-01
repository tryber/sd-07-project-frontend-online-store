import React, { Component } from 'react';
import EmptyCart from '../components/EmptyCard/EmptyCard';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
    this.getPreviousProducts = this.getPreviousProducts.bind(this);
  }

  componentDidMount() {
    this.getPreviousProducts();
  }

  getPreviousProducts() {
    this.setState({ cart: JSON.parse(localStorage.getItem('cart')) });
  }

  addOne(id) {
    const { cart } = this.state;
    const cartCopy = [...cart];
    const findSCProduct = cartCopy.find((SCproduct) => SCproduct.id === id);
    findSCProduct.quantity += 1;
    this.setState({ cart: cartCopy });
  }

  removeOne(id) {
    const { cart } = this.state;
    const cartCopy = [...cart];
    const findSCProduct = cartCopy.find((SCproduct) => SCproduct.id === id);
    findSCProduct.quantity -= 1;
    if (findSCProduct.quantity >= 1) {
      this.setState({ cart: cartCopy });
    }
  }

  render() {
    const { cart } = this.state;
    const zero = 0;
    if (!cart) {
      return (
        <h2 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h2>
      );
    }

    return (
      <div>
        {cart.map((product) => (
          <div key={ product.id }>
            <h3 data-testid="shopping-cart-product-name">{product.title}</h3>
            <img src={ product.thumbnail } alt="" />
            <h3>{ product.price }</h3>
            <p>
              Qts:
              <span
                data-testid="shopping-cart-product-quantity"
              >
                { product.quantity }
              </span>
            </p>
            <button
              type="button"
              data-testid="product-decrease-quantity"
              onClick={ () => this.removeOne(product.id) }
            >
              -
            </button>
            <button
              type="button"
              data-testid="product-increase-quantity"
              onClick={ () => this.addOne(product.id) }
            >
              +
            </button>
          </div>
        ))}
        <div>
          Valor total: R$
          <span>
            {cart.reduce((acc, curr) => (acc + (curr.price * curr.quantity)), zero)}
          </span>
        </div>
        <EmptyCart />
      </div>
    );
  }
}

export default ShoppingCart;
