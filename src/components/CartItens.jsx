import React from 'react';
import PropTypes from 'prop-types';

class CartItens extends React.Component {
  constructor(props) {
    super(props);
    this.state = { array: JSON.parse(localStorage.getItem('cartItems')) };
    /*  this.buttonEnable = this.buttonEnable.bind(this);
        this.buttonDisable = this.buttonDisable.bind(this); */
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
  }
  /*   componentDidMount() {
      this.buttonDisable();
      this.buttonEnable();
    } */
  /*   buttonDisable() {
      const bool = true;
      const button = (
        <div>
          <button
            type="button"
            className="quantity-buttons"
            data-testid="product-increase-quantity"
            disabled={bool}
            onClick={() => this.increaseQuantity}
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
            onClick={() => this.increaseQuantity}
          >
            +
          </button>
        </div>);
      return button;
    } */

  increaseQuantity(item) {
    const zero = 0;
    const localStorageItens = JSON.parse(localStorage.getItem('cartItems'));
    const index = localStorageItens
      .findIndex((localObject) => localObject.id === item.id);

    if (localStorageItens[index].quantity >= zero) {
      localStorageItens[index].quantity += 1;
      localStorage.setItem(
        'cartItems',
        JSON.stringify(localStorageItens),
      );
      this.setState({ array: localStorageItens });
    }
  }

  decreaseQuantity(item) {
    const zero = 0;
    const localStorageItens = JSON.parse(localStorage.getItem('cartItems'));
    const index = localStorageItens
      .findIndex((localObject) => localObject.id === item.id);

    if (localStorageItens[index].quantity > zero) {
      localStorageItens[index].quantity -= 1;
      localStorage.setItem(
        'cartItems',
        JSON.stringify(localStorageItens),
      );
      this.setState({ array: localStorageItens });
    }
  }

  render() {
    const two = 2;
    const { item } = this.props;
    const { id, title } = item;
    const { array } = this.state;
    const index = array
      .findIndex((localObject) => localObject.id === id);
    const total = array[index].price * array[index].quantity;

    return (
      <div>
        <div>
          <div className="cart-item">
            <p data-testid="shopping-cart-product-name">
              { title }
            </p>
            <p>
              { total.toFixed(two) }
            </p>

            <button
              type="button"
              className="quantity-buttons"
              data-testid="product-decrease-quantity"
              onClick={ () => { this.decreaseQuantity(item); } }
            >
              -
            </button>

            <div
              data-testid="shopping-cart-product-quantity"
              className="cart-item-quantity"
            >
              { array[index].quantity }
            </div>

            <button
              type="button"
              className="quantity-buttons"
              data-testid="product-increase-quantity"
              disabled={ array[index].quantity >= array[index].inStock }
              onClick={ () => { this.increaseQuantity(item); } }
            >
              +
            </button>
          </div>
        </div>
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
