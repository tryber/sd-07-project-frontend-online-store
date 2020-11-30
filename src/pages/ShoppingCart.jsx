import React from 'react';

export default class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      objeto: [],
    };

    this.recuperaLocalStorage = this.recuperaLocalStorage.bind(this);
    this.arrayEmpty = this.arrayEmpty.bind(this);
  }

  componentDidMount() {
    const local = JSON.parse(localStorage.getItem('items'));
    if (local === null) {
      this.arrayEmpty();
    } else {
      this.recuperaLocalStorage();
    }
  }

  arrayEmpty() {
    this.setState({ objeto: [] });
  }

  recuperaLocalStorage() {
    const objeto = JSON.parse(localStorage.getItem('items'));
    this.setState({ objeto });
  }

  render() {
    const { objeto } = this.state;
    return (
      <div data-testid="shopping-cart-empty-message">
        `Seu carrinho está vazio`
        <div>
          { objeto.map((item) => (
            <div data-testid="shopping-cart-product-name" key={ item.id }>
              {item.title}
              <img src={ item.thumbnail } alt="foto do produto" />
              <p data-testid="shopping-cart-product-quantity">
                {item.quantidade}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
