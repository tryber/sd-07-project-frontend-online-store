import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import GetIcon from './Icons';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.addCartItem = this.addCartItem.bind(this);
  }

  addCartItem({ id, title, price }) {
    const cartItemProperties = { id, title, price };
    cartItemProperties.quantity = 1;
    if (!localStorage.cartItems) {
      localStorage.setItem('cartItems', JSON.stringify([cartItemProperties]));
    } else {
      const itemsInStorage = localStorage.getItem('cartItems');
      const parsedItems = JSON.parse(itemsInStorage);
      localStorage.setItem(
        'cartItems',
        JSON.stringify(parsedItems.concat(cartItemProperties))
      );
    }
    const { onAdd } = this.props;
    onAdd();
  }
  render() {

    const { products, counter } = this.props;
    const { title, thumbnail, price, id, category_id } = products;
    return (
      <div data-testid="product" className="cardProduct">
        <img src={ thumbnail } alt="product item" />
        <div className="product-container">
          <Link
            className="product-detail-link"
            to={ {
              pathname: `/details/${id}/category/${category_id}`,
              counter: counter,
            } }
            data-testid="product-detail-link"
          >
            {' '}
            <h1>{ title }</h1>
            {' '}
          </Link>
          <h2>
            R$
            { price }
          </h2>
        </div>

        <button
          type="button"
          name="productId"
          className="product-add-to-cart"
          data-testid="product-add-to-cart"
          onClick={ () => this.addCartItem({ id, title, price }) }
        >
          <GetIcon className="add-shopping-cart-icon" name="AddShoppingCartIcon" />
        </button>
      </div>
    );
  }
}

export default Card;
