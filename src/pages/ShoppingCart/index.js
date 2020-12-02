import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ShoppingCartList, Header } from '../../components';
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
    const { location } = this.props;
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    return (
      <div className="cart-list-container">
        <Header pathname={ location.pathname } />
        <h2>Carrinho de Compras</h2>
        <ShoppingCartList
          purchasedProducts={ purchasedProducts }
          handleChange={ this.updateTotalPrice }
        />
        <h3>
          { `Valor Total da Compra: ${formatter.format(totalPrice)}` }
        </h3>
        <div>
          <Link to="/checkout">
            <button
              type="button"
              data-testid="checkout-products"
            >
              Finalizar Compra
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default ShoppingCart;
