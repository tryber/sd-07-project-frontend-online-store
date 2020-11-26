import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import goBackArrow from '../img/back-arrow.png';

export default class Product extends Component {
  render() {
    const { productName, productImg, productPrice } = this.props.location.state;
    return (
      <div>
        <div>
          <Link to="/">
            <img src={ goBackArrow } className="go-back-arrow-icon" alt="goBackArrow"/>
          </Link>
        </div>
        <div data-testid="product-detail-add-to-cart">
          <h1 data-testid="product-detail-name">{ productName }</h1>
          <img src={ productImg } alt="productImg"/>
          <p>{ productPrice }</p>
          <Link
            data-testid="shopping-cart-button"
            to={ {
              pathname: '/ShoppingCart',
              state: {
                productName,
              },
            }}
          >
            Adicionar ao carrinho
          </Link>
        </div>
      </div>
    );
  }
}
