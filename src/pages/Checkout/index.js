import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ShoppingCartList, Header } from '../../components';
import * as lsapi from '../../services/lsapi';
import './Checkout.css';

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
      <div className="checkout-container">
        <Header pathname={ location.pathname } />
        <h2>Revise seus Produtos</h2>
        <ShoppingCartList
          purchasedProducts={ purchasedProducts }
          handleChange={ this.updateTotalPrice }
          hiddenbuttons="true"
        />
        <h3>
          { `Valor Total da Compra: ${formatter.format(totalPrice)}` }
        </h3>
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
