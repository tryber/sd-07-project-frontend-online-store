import React from 'react';

class Cart extends React.Component {
  constructor() {
    super();

    this.state = {
      products: JSON.parse(localStorage.getItem('products')) || [],
    };
  }

  render() {
    const { products } = this.state;
    const size = 0;
    if (products.length === size) {
      return (
        <div data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </div>
      );
    }
    // prettier-ignore
    return (
      <div>
        {products.map((element) => (
          <div key={ element.price }>
            <p data-testid="shopping-cart-product-name">
              Produto:
              {element.title}
              |
              Preço:
              {element.price}
            </p>
            <p data-testid="shopping-cart-product-quantity">
              Quantidade:
              {element.qtd}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default Cart;
