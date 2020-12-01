/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as view from '../../views';
import * as css from './style';
import * as icon from '../../components/Icons';

export class ShopCart extends Component {
  constructor(props) {
    super();
  
    this.state = {
      productsInCart: [],

    };
  }
  
  componentDidMount() {
    this.getProductsFromLocation();
  }

  getProductsFromLocation() {
    const { productItens } = this.props.location;
    this.setState({ productsInCart: productItens});
  }

  render() {
    const { productsInCart } = this.state;
    return (
      <css.Ctn>
        <div className="icon-ctn">
          <Link data-testid="shopping-cart-button" to="/">
            <icon.Back />
          </Link>
          <icon.Cart color="gray" />
        </div>
        <div className="ctn-item-display">
          { productsInCart.map(products => (<view.ItemProduct product={products}/>)) }
        </div>

        <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>
      </css.Ctn>
    );
  }
}

export default ShopCart;
