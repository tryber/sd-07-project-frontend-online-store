import React from 'react';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      products: JSON.parse(localStorage.getItem('products')) || [],
      soma: parseFloat(localStorage.getItem('soma')),
    };
  }

  handleClick({ target }) {
    const { products } = this.state;
    let { soma } = this.state;
    const zero = 0;

    if (target.classList.contains('button-increase')) {
      products.forEach((element, index) => {
        if (target.id.includes(index)) {
          element.qtd += 1;
          soma += element.price;
        }
        this.setState({ products, soma });
        localStorage.setItem('products', JSON.stringify(products));
        localStorage.setItem('soma', soma);
      });
    } else {
      products.forEach((element, index) => {
        if (target.id.includes(index)) {
          if (element.qtd === zero) {
            element.qtd = 0;
          } else {
            element.qtd -= 1;
            soma -= element.price;
          }
        }
        this.setState({ products, soma });
        localStorage.setItem('products', JSON.stringify(products));
        localStorage.setItem('soma', soma);
      });
    }
  }

  render() {
    const { products, soma } = this.state;
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
        <p>
          Valor total:
          {soma}
        </p>
        <Link to="/cart/purchase">FINALIZAR A COMPRA</Link>
      </div>
    );
  }
}

export default Cart;
