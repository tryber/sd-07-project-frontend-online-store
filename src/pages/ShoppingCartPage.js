import React from 'react';

class ShoppingCartPage extends React.Component {
  constructor() {
    super();

    this.updateState = this.updateState.bind(this);

    this.state = {
      products: [],
      amount: [],
    };
  }

  componentDidMount() {
    const products = Object.keys(localStorage);
    const amount = Object.values(localStorage);
    this.updateState(products, amount);
  }

  updateState(products, amount) {
    this.setState({
      products,
      amount,
    });
  }

  render() {
    const { products, amount } = this.state;

    return (
      <div>
        {products.map((productName, index) => (
          <div key={ productName }>
            <p data-testid="shopping-cart-product-name">
              {productName}
            </p>
            <span data-testid="shopping-cart-product-quantity">
              {amount[index]}
            </span>
          </div>
        ))}
        {
          !products.length
          && <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
        }
      </div>
    );
  }
}

export default ShoppingCartPage;
