import React from 'react';
export default class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      objeto: [],
      loading: true,
    };
    this.recuperaLocalStorage = this.recuperaLocalStorage.bind(this);
    this.arrayEmpty = this.arrayEmpty.bind(this);
  }

  arrayEmpty() {
    this.setState({ objeto: [] });
  }

  componentDidMount() {
    const local = JSON.parse(localStorage.getItem('items'));
    local === null ? this.arrayEmpty() : this.recuperaLocalStorage();
  }

  recuperaLocalStorage() {
    const objeto = JSON.parse(localStorage.getItem('items'));
    this.setState({ objeto });
  }

  render() {
    const { location: { state: product } } = this.props;
    return (
<<<<<<< HEAD
      <div
        data-testid="shopping-cart-empty-message"
      >
        <p>Seu carrinho está vazio</p>
        <p>{ product.title }</p>
=======
      <div data-testid="shopping-cart-empty-message">
        "Seu carrinho está vazio"
        <div>
          {this.state.objeto.map((product) => (
            <div data-testid="shopping-cart-product-name" key={product.id}>
              {product.title}
              <img src={product.thumbnail} />
              <p data-testid="shopping-cart-product-quantity">
                {product.quantidade}
              </p>
            </div>
          ))}
        </div>
>>>>>>> 4dbb86fb5606ce9dd3b48dc838e88052b0b5c688
      </div>
    );
  }
}

