import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCartList from './ProductCartList';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.amount = this.amount.bind(this);
    this.state = {
      message: 'Seu carrinho está vazio',
      total: 0,
    };
  }

  componentDidMount() {
    this.amount();
  }

  componentDidUpdate(previusValueProps) {
    if (previusValueProps !== this.props) {
      this.amount();
    }
  }

  amount() {
    const number = 0;
    const { cartItems } = this.props;
    if (cartItems.length >= 1) {
      this.setState({
        total: cartItems.reduce(
          (acc, value) => (acc + value.price) * value.countItems,
          number,
        ),
      });
    }
  }

  render() {
    const { cartItems, addCart, removeItemCart, removeCart } = this.props;
    const { message, total } = this.state;
    if (cartItems.length < 1) {
      return <h1 data-testid="shopping-cart-empty-message">{ message }</h1>;
    }
    return (
      <div>
        <ProductCartList
          cartItems={ cartItems }
          addCart={ addCart }
          removeItemCart={ removeItemCart }
          removeCart={ removeCart }
        />
        <p>
          Valor total:
          { total }
        </p>
        <button type="button">Finalizar Compra</button>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  addCart: PropTypes.func.isRequired,
  removeItemCart: PropTypes.func.isRequired,
  removeCart: PropTypes.func.isRequired,
};

export default ShoppingCart;
