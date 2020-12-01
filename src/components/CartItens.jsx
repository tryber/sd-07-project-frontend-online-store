import React from 'react';
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
    productList.map((product) => {
      if (product.id === productListed.id) product.quantity = this.state.quantity + func;
    });
    localStorage.setItem('cartItems', JSON.stringify(productList));
  }

  render() {
    function increaseQuantity(state) {
      this.updateQuantity(this, 1);
      const newState = { ...state, quantity: state.quantity + 1 };
      return newState;
    }

    function decreaseQuantity(state) {
      if (state.quantity > 1) {
        this.updateQuantity(this, -1);
        const newState = { ...state, quantity: state.quantity - 1 };
        return newState;
      }
    }

    const { item } = this.props;
    const { title, price } = item;

    return (
      <div className="cart-item">
        <GetIcon name="CloseIcon" />
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <p>{ price * this.state.quantity }</p>

        <button
          className="quantity-buttons"
          data-testid="product-decrease-quantity"
          onClick={ () => { this.setState(decreaseQuantity); } }
        >
          <GetIcon name="DashIcon" />
        </button>

        <div data-testid="shopping-cart-product-quantity" className="cart-item-quantity">
          { this.state.quantity }
        </div>

        <button
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

export default CartItens;
