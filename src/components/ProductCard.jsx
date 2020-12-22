import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.addCartItem = this.addCartItem.bind(this);
  }

  addCartItem({ id, title, price, inStock }) {
    const evaluation = [];
    const cartItemProperties = { id, title, price, inStock, evaluation };
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
    const { onAddCard } = this.props;
    onAddCard();
  }

  render() {
    const { product } = this.props;
    const { available_quantity: inStock } = product;
    const { title, thumbnail, price, id, shipping } = product;
    const p = <p data-testid="free-shipping">Frete grátis!</p>;
    return (
      <div data-testid="product">
        <Link
          to={ {
            pathname: `/details/${id}/category/${product.category_id}`,
          } }
          data-testid="product-detail-link"
        >
          <h5>{ title }</h5>
        </Link>
        <img src={ thumbnail } alt="product item" />
        <div>
          <h6>
            R$
            {price}
          </h6>
        </div>
        <div>
          {shipping.free_shipping ? p : ''}
        </div>
        <button
          type="button"
          name="productId"
          data-testid="product-add-to-cart"
          onClick={ () => this.addCartItem({ id, title, price, inStock }) }
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
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }),
  }),
  counter: PropTypes.number,
}.isRequired;
