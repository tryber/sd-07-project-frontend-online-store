import React, { Component } from 'react';
import { ShoppingCartList } from '../../components';
import * as lsapi from '../../services/lsapi';
import './ShoppingCart.css';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPrice: 0,
    };
    this.updateTotalPrice = this.updateTotalPrice.bind(this);
  }

  componentDidMount() {
    this.updateTotalPrice();
  }

  updateTotalPrice() {
    this.setState({ totalPrice: lsapi.getTotalPrice() });
  }

  render() {
    const purchasedProducts = lsapi.getShoppingCartList();
    const { totalPrice } = this.state;
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    return (
      <div className="cart-list-container">
        <h2>Carrinho de Compras</h2>
        <ShoppingCartList
          purchasedProducts={ purchasedProducts }
          handleChange={ this.updateTotalPrice }
        />
        <h3>
          { `Valor Total da Compra: ${formatter.format(totalPrice)}` }
        </h3>
      </div>
    );
  }
}

export default ShoppingCart;
