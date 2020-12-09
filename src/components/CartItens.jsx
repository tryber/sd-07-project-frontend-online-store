import React from 'react';
import PropTypes from 'prop-types';

class CartItens extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
    this.buttonEnable = this.buttonEnable.bind(this);
    this.buttonDisable = this.buttonDisable.bind(this);
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
  }

  componentDidMount() {
    this.buttonDisable();
    this.buttonEnable();
  }

  updateQuantity(elem, func) {
    const productList = JSON.parse(localStorage.getItem('cartItems'));
    const productListed = elem.props.item;
    const { quantity: quantityFromState } = this.state;
    productList.map(({ id, quantity }) => {
      if (id === productListed.id) quantity = quantityFromState + func;
      return quantity;
    });
    const findIndexInArray = productList
      .findIndex((item) => item.id === elem.props.item.id);
    productList[findIndexInArray].quantity = quantityFromState + func;
    localStorage.setItem('cartItems', JSON.stringify(productList));
  }

  buttonDisable() {
    const bool = true;
    const button = (
      <div>
        <button
          type="button"
          className="quantity-buttons"
          data-testid="product-increase-quantity"
          disabled={ bool }
          onClick={ () => { this.setState(this.increaseQuantity); } }
        >
          +
        </button>
      </div>);

    return button;
  }

  buttonEnable() {
    const button = (
      <div>
        <button
          type="button"
          className="quantity-buttons"
          data-testid="product-increase-quantity"
          onClick={ () => { this.setState(this.increaseQuantity); } }
        >
          +
        </button>
      </div>);

    return button;
  }

  increaseQuantity(state) {
    const func = 1;
    this.updateQuantity(this, func);
    const newState = { ...state, quantity: state.quantity + func };
    return newState;
  }

  decreaseQuantity(state) {
    if (state.quantity > 1) {
      const func = -1;
      this.updateQuantity(this, func);
      const newState = { ...state, quantity: state.quantity + func };
      return newState;
    }
  }

  render() {
    const { item } = this.props;
    const { title, price } = item;
    const { quantity } = this.state;

    return (

      <div className="cart-item">
        <p data-testid="shopping-cart-product-name">
          {title}
        </p>
        <p>
          {price * quantity}
        </p>

        <button
          type="button"
          className="quantity-buttons"
          data-testid="product-decrease-quantity"
          onClick={ () => { this.setState(this.decreaseQuantity); } }
        >
          -
        </button>

        <div data-testid="shopping-cart-product-quantity" className="cart-item-quantity">
          {quantity}
        </div>

        { quantity < item.inStock ? this.buttonEnable() : this.buttonDisable()}

      </div>
    );
  }
}

CartItens.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    id: PropTypes.string,
  }),
}.isRequired;

export default CartItens;
