import React from 'react';

class CartItens extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }

  render() {

    function increaseQuantity(state) {
      const newState = {...state, quantity: state.quantity + 1};
      return newState;
    }

    function decreaseQuantity(state) {
      if(state.quantity > 1) {
        const newState = {...state, quantity: state.quantity - 1};
        return newState;
      }
    }

    const { item } = this.props;
    const { title, price } = item;
    return (
      <div className="cart-item">
        <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>
        <p data-testid="shopping-cart-product-name" >{ title }</p>
        <p>{ price * this.state.quantity }</p>

        <button className="quantity-buttons" data-testid="product-decrease-quantity" onClick={ () => { this.setState(decreaseQuantity) } }>
          <svg viewBox="0 0 16 16" class="bi bi-dash" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/></svg>
        </button>

        <div data-testid="shopping-cart-product-quantity" className="cart-item-quantity">{this.state.quantity}</div>

        <button className="quantity-buttons" data-testid="product-increase-quantity" onClick={ () => { this.setState(increaseQuantity) } }>
          <svg viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/></svg>
        </button>
      </div>
    )
  }
}

export default CartItens;
