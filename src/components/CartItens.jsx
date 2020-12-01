import React from 'react';
import PropTypes from 'prop-types';
import GetIcon from './Icons';

class CartItens extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }

  updateQuantity(elem, func) {
    const productList = JSON.parse(localStorage.getItem('cartItems'));
    const productListed = elem.props.item;
    const { quantity: quantityFromState } = this.state;
    productList.map(({ id, quantity }) => {
      if (id === productListed.id) quantity = quantityFromState + func;
      return quantity;
    });
    localStorage.setItem('cartItems', JSON.stringify(productList));
  }

  render() {
    function increaseQuantity(state) {
      const func = 1;
      this.updateQuantity(this, func);
      const newState = { ...state, quantity: state.quantity + func };
      return newState;
    }

    function decreaseQuantity(state) {
      if (state.quantity > 1) {
        const func = -1;
        this.updateQuantity(this, func);
        const newState = { ...state, quantity: state.quantity + func };
        return newState;
      }
    }

    const { item } = this.props;
    const { title, price } = item;
    const { quantity } = this.state;

    return (
      <div className="cart-item">
        <GetIcon name="CloseIcon" />
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <p>{ price * quantity }</p>

        <button
          type="button"
          className="quantity-buttons"
          data-testid="product-decrease-quantity"
          onClick={ () => { this.setState(decreaseQuantity); } }
        >
          <GetIcon name="DashIcon" />
        </button>

        <div data-testid="shopping-cart-product-quantity" className="cart-item-quantity">
          { quantity }
        </div>

        <button
          type="button"
          className="quantity-buttons"
          data-testid="product-increase-quantity"
          onClick={ () => { this.setState(increaseQuantity); } }
        >
          <GetIcon name="PlusIcon" />
        </button>
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

