import React from 'react';
import { Link } from 'react-router-dom';
import voltar from '../icon/voltar.png';
import '../App.css';

class ShoppinCart extends React.Component {
  constructor() {
    super();
    this.state = {
      totalPrice: 0,
      productDelete: JSON.parse(localStorage.getItem("cart")),
    };
    this.priceTotal = this.priceTotal.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  componentDidMount() {
    this.priceTotal();
  }

  priceTotal() {
    const price = JSON.parse(localStorage.getItem("cart"));
    const prices = price === null ? [] : price;
    prices.map((tot) => {
      return this.setState((prevPrice) => ({
        totalPrice: prevPrice.totalPrice + parseFloat(tot.split("$")[1]),
      }));
    });
  }

  deleteProduct() {
    const product = JSON.parse(localStorage.getItem("cart"));
    const products = product === null ? [] : product;
    const { productDelete } = this.state;
    products.filter((prod) => {
      return productDelete.filter((del) => {
        return prod.split("$")[0] !== del.split("$")[0];
      });
    });
  }

  render() {
    const localNamePriceCart = JSON.parse(localStorage.getItem("cart"));
    const localCArt = localNamePriceCart === null ? [] : localNamePriceCart;
    return (
      <div className="cart">
        <h3 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h3>
        <Link to="/">
          <img className="voltar" src={ voltar } alt="imagem-Voltar" />
        </Link>
        <div>
          {localCArt.map((namePrice) => {
            return (
              <div key={namePrice.split("$")[0]}>
                <button onClick={ this.deleteProduct }>X</button>
                <span data-testid="shopping-cart-product-quantity">
                  Quantidade:
                  {localCArt.length === null
                    ? 0
                    : localCArt.length - (localCArt.length - 1)}
                </span>
                <p data-testid="shopping-cart-product-name">
                  {namePrice.split("$")[0]}
                </p>
                <p>R$ 
                  {namePrice.split("$")[1]}
                </p>
              </div>
            );
          })}
          <p>Valor Total: R$ 
            { this.state.totalPrice }
          </p>
        </div>
      </div>
    );
  }
}

export default ShoppinCart;
