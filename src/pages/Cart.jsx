import React from 'react';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    this.setState((previous) => {
      quantity: previous + 1,
    });
  }

  decrease() {
    const reset = 0
    const { quantity } = this.state;
    const result = quantity - 1;
    result < 0 ? this.setState({ quantity: reset }) : this.setState({ quantity: result });
  }

  render() {
    const { quantity } = this.state;
    const cartProduct = sessionStorage.getItem('item');
    if (!cartProduct) {
      return <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>;
    }

    return (
      <div>
        <span data-testid="shopping-cart-product-name">{cartProduct}</span>
        <p>
          Quantidade:
        <span data-testid="shopping-cart-product-quantity">{quantity}</span>
        <button data-testid="product-increase-quantity" onClick={this.increase}><i className="fas fa-plus"></i></button>
        <button data-testid="product-decrease-quantity" onClick={this.decrease}><i className="fas fa-minus"></i></button>
        </p>
      </div>
    );
  }
}

export default Cart;
