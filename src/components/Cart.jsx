import React from 'react';

class Cart extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      products: JSON.parse(localStorage.getItem('products')) || [],
    };
  }

  handleClick({ target }) {
    const { products } = this.state;
    const zero = 0;
    if (target.classList.contains('button-increase')) {
      products.forEach((element, index) => {
        if (target.id.includes(index)) {
          element.qtd += 1;
        }
        this.setState({ products });
      });
    } else {
      products.forEach((element, index) => {
        if (target.id.includes(index)) {
          if (element.qtd === zero) element.qtd = 0;
          else element.qtd -= 1;
        }
        this.setState({ products });
      });
    }
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
        {products.map((element, index) => (
          <div key={ element.price }>
            <p>
              <button type="button">X</button>
              Produto:
              <span data-testid="shopping-cart-product-name">
                {element.title}
              </span>
              Preço:
              <span>
                {element.price}
              </span>
            </p>
            <div>
              <button
                type="button"
                data-testid="product-increase-quantity"
                className="button-increase"
                onClick={ this.handleClick }
                id={ `buttonUp${index}` }
              >
                +
              </button>
              Quantidade:
              <span data-testid="shopping-cart-product-quantity">
                {element.qtd}
              </span>
              <button
                type="button"
                data-testid="product-decrease-quantity"
                className="button-decrease"
                onClick={ this.handleClick }
                id={ `buttonDown${index}` }
              >
                -
              </button>
            </div>
          </div>
        ))}
        <br />
        <button type="button">FINALIZAR A COMPRA</button>
      </div>
    );
  }
}

export default Cart;
