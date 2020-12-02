import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as lsapi from '../../services/lsapi';
import './Checkout.css';
import {
  ShoppingCartList,
  Header,
  BuyerInformation,
  PaymentOption } from '../../components';

class Checkout extends Component {
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
    const { location } = this.props;
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    return (
      <div>
        <Header pathname={ location.pathname } />
        <div className="checkout-container">
          <h2>Revise seus Produtos</h2>
          <ShoppingCartList
            purchasedProducts={ purchasedProducts }
            handleChange={ this.updateTotalPrice }
            hiddenbuttons
          />
          <h3>
            { `Valor Total da Compra: ${formatter.format(totalPrice)}` }
          </h3>
        </div>
        <div className="buyer-information-container">
          <BuyerInformation />
        </div>
        <div className="payment-option-container">
          <PaymentOption />
        </div>
      </div>
    );
  }
}

Checkout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Checkout;
