import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as view from '../../views';
import * as css from './style';
import * as icon from '../../components/Icons';

export class ShopCart extends Component {
  constructor(props) {
    super();

    this.state = {
      cartProducts: [],
      priceTotal: 10,
      isEmpytCart: false,
      product: {
        id: 'teste',
        title: 'teste com titulo de produto muito grande para caber em uma linha',
        price: 34.02,
        amount: 2,
        thumbnail: 'testeimg',
      },
    };
  }

  render() {
    const { priceTotal } = this.state;
    return (
      <css.Ctn>
        <div className="icon-ctn">
          <Link data-testid="shopping-cart-button" to="/">
            <icon.Back />
          </Link>
          <icon.Cart color="gray" />
        </div>

        <div className="item-product-ctn">
          <view.ItemProduct product={this.state.product} />
        </div>
        <div className="item-product-ctn">
          <view.ItemProduct product={this.state.product} />
        </div>
        <div className="item-product-ctn">
          <view.ItemProduct product={this.state.product} />
        </div>
        <div className="item-product-ctn">
          <view.ItemProduct product={this.state.product} />
        </div>
        <div>
          <p>Preço total:{priceTotal}</p>
        </div>

        <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>
      </css.Ctn>
    );
  }
}

export default ShopCart;
