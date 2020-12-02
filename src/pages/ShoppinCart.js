import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { Icon } from 'rbx';

class ShoppinCart extends React.Component {
  constructor() {
    super();
    this.state = {
      totalPrice: 0,
      productDelete: JSON.parse(localStorage.getItem('cart')),
    };
    this.priceTotal = this.priceTotal.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  componentDidMount() {
    this.priceTotal();
  }

  priceTotal() {
    const price = JSON.parse(localStorage.getItem('cart'));
    const prices = price === null ? [] : price;
    prices.map((tot) => {
      console.log();
      return this.setState((prevPrice) => ({
        totalPrice: prevPrice.totalPrice + parseFloat(tot.split('$')[1]),
      }));
    });
  }

  deleteProduct() {
    const product = JSON.parse(localStorage.getItem('cart'));
    const products = product === null ? [] : product;
    const { productDelete } = this.state;
    products.filter((prod) => {
      console.log();
      return productDelete.filter((del) => {
        console.log();
        return prod.split('$')[0] !== del.split('$')[0];
      });
    });
  }

  render() {
    const { totalPrice } = this.state;
    const localNamePriceCart = JSON.parse(localStorage.getItem('cart'));
    const localCArt = localNamePriceCart === null ? [] : localNamePriceCart;
    return (
      <div className="cart">
        <h3 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h3>
        <Link to="/">
          <Icon size="large">
            <FontAwesomeIcon icon={ faBackward } size="3x" />
          </Icon>
        </Link>
        <div>
          {localCArt.map((namePrice) => {
            console.log();
            return (
              <div key={ namePrice.split('$')[0] }>
                <button type="button" onClick={ this.deleteProduct }>
                  X
                </button>
                <span data-testid="shopping-cart-product-quantity">
                  Quantidade:
                  {localCArt.length === null
                    ? []
                    : localCArt.length - (localCArt.length - 1)}
                </span>
                <p data-testid="shopping-cart-product-name">
                  {namePrice.split('$')[0]}
                </p>
                <p>
                  R$
                  {namePrice.split('$')[1]}
                </p>
              </div>
            );
          })}
          <p>
            Valor Total: R$
            {totalPrice}
          </p>
        </div>
      </div>
    );
  }
}

export default ShoppinCart;
