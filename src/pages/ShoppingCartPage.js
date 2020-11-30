import React from 'react';

class ShoppingCartPage extends React.Component {
  constructor(props) {
    super(props);

    this.actualizeState = this.actualizeState.bind(this);
    this.state = {
      productsSelected: [],
      amount: [],
    };
  }

  componentDidMount() {
    const productName = Object.keys(localStorage);
    const productAmount = Object.values(localStorage);
    this.actualizeState(productName, productAmount);
  }

  actualizeState(productsSelected, amount) {
    this.setState({ productsSelected, amount });
  }

  render() {
    const { productsSelected, amount } = this.state;

    return (
      <div>
        {productsSelected.map((product, index) => (
          <div key={ product }>
            <p data-testid="shopping-cart-product-name">
              {product}
            </p>
            <span data-testid="shopping-cart-product-quantity">
              {amount[index]}
            </span>
          </div>
        ))}
        {
          !productsSelected.length
          && <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
        }
      </div>
    );
  }
}

export default ShoppingCartPage;
