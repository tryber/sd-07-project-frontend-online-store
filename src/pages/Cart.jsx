import React from 'react';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    const cartProduct = JSON.parse(sessionStorage.getItem('item'));

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);

    this.state = {
      products: cartProduct,
    };
  }

  componentDidUpdate() {
    const { products } = this.state;
    sessionStorage.setItem('item', JSON.stringify(products));
  }

  increase(index) {
    const { products } = this.state;

    this.setState({ products: products.map((product, i) => {
      if (index === i) return { ...product, quantity: product.quantity + 1 };
      return product;
    }) });
  }

  decrease(index) {
    const { products } = this.state;

    this.setState({ products: products.map((product, i) => {
      if (index === i) return { ...product, quantity: product.quantity - 1 };
      return product;
    }) });
  }

  render() {
    const { products } = this.state;

    if (!products) {
      return <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>;
    }

    return (
      <div id="cart-items">
        {products.map(({ title, quantity }, index) => (
          <div id="cart-item" key={ title }>
            <span data-testid="shopping-cart-product-name">{ title }</span>
            <p>
              Quantidade:
              <span data-testid="shopping-cart-product-quantity">{ quantity }</span>
              <button
                type="button"
                data-testid="product-increase-quantity"
                onClick={ () => this.increase(index) }
              >
                <i className="fas fa-plus" />
              </button>
              <button
                type="button"
                data-testid="product-decrease-quantity"
                onClick={ () => this.decrease(index) }
                disabled={ quantity === 1 }
              >
                <i className="fas fa-minus" />
              </button>
            </p>
          </div>
        ))}
        <Link to="/checkout" data-testid="checkout-products">Finalizar compra</Link>
      </div>
    );
  }
}

export default Cart;
