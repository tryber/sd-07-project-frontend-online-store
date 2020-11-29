import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import CartIcon from '../components/CartIcon';
import CartItem from '../components/CartItem';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalQuantity: 0,
      totalPrice: 0,
    };
    this.handleCartIcom = this.handleCartIcom.bind(this);
    this.totalAmount = this.totalAmount.bind(this);
  }

  componentDidMount() {
    this.totalAmount();
  }

  totalAmount() {
    const valueInit = 0;
    const { cart } = this.props;
    let { totalQuantity } = this.state;
    totalQuantity = cart.reduce((acc, item) => acc + parseInt(item.quantity, 10),
      valueInit);
    this.setState({ totalQuantity });
    console.log('TotalAmoutn: ', totalQuantity);
  }

  handleCartIcom(quantity) {
    this.totalAmount();
  }

  render() {
    const { cart } = this.props;
    const { totalQuantity } = this.state;
    if (!cart.length) {
      return (
        <div>
          <Header
            text="Carrinho de Compras"
            imagePath="images/shopping-cart-50.png"
            imagePathReply="images/reply-arrow-red-50.png"
          />
          <img
            src="images/empty-shopping-basket-red.png"
            alt="Carrinho de Compras"
          />
          <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
        </div>);
    }
    return (
      <div>
        <Header
          totalQuantity={ totalQuantity }
          text="Carrinho de Compras"
          imagePathReply="images/reply-arrow-red-50.png"
        />
        <CartIcon totalQuantity={ totalQuantity } />
        {
          cart.map((item) => (
            <CartItem key={ item.id } item={ item } onClick={ this.handleCartIcom } />
          ))
        }
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default ShoppingCart;
