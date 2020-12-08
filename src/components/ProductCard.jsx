import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
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
        JSON.stringify(parsedItems.concat(cartItemProperties)),
      );
    }
  }

  render() {
    const { product } = this.props;
    const { title, thumbnail, price, id } = product;
    return (
      <div data-testid="product">
        <Link
          to={ {
            pathname: `/details/${id}/category/${product.category_id}`,
          } }
          data-testid="product-detail-link"
        >
          <h4>{ title }</h4>
        </Link>
        <img src={ thumbnail } alt="product item" />
        <div>
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
          Adicionar ao Carinho
        </button>
      </div>
    );
  }
}

export default ProductCard;

ProductCard.propTypes = {
  onAdd: PropTypes.func,
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
    categoryId: PropTypes.string,
  }),
  counter: PropTypes.number,
}.isRequired;
