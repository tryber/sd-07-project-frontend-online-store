import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.restoreState = this.restoreState.bind(this);
    this.state = {
      productsTeste: [],
    };
  }

  componentDidMount() {
    this.restoreState();
  }

  async restoreState() {
    const products = await JSON.parse(localStorage.getItem('itemsCart'));
    this.setState({ productsTeste: products });
  }

  render() {
    const { productsTeste } = this.state;
    return (
      <div>
        {productsTeste ? productsTeste.map((item) => (
          <div key={ item.title }>
            <p data-testid="shopping-cart-product-name">{ item.title }</p>
            <p>{ item.price }</p>
            <p data-testid="shopping-cart-product-quantity">{ item.qtd }</p>
          </div>
        )) : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}
        {/* <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p> */}
        <Link
          to={
            { pathname: '/checkout',
              state: { products: productsTeste } }
          }
          data-testid="checkout-products"
        >
          Fechar Carrinho
        </Link>
      </div>
    );
  }
}

export default ShoppingCart;
