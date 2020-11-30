import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
export default class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      objeto: [],
    };
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    const { id, title, price, thumbnail } = this.props.product;
    const array = JSON.parse(localStorage.getItem('items') || '[]');
    const index = array.findIndex((elemento) => elemento.id === id);
    index === -1
      ? array.push({ id, title, price, thumbnail, quantidade: 1 })
      : array[index].quantidade++;
    localStorage.setItem('items', JSON.stringify(array));
  }

  render() {
    const { product } = this.props;
    const { title, price, thumbnail, id } = product;
    return (
      <div data-testid="product" className="product-card" key={id}>
        <Link
          to={{
            pathname: `/details/${id}`,
            state: product,
          }}
          data-testid="product-detail-link"
        >
          <h3>{title}</h3>
        </Link>
        <p>{`Preço: ${price}`}</p>
<<<<<<< HEAD
        <img src={ thumbnail } alt={ title } />
        <Link data-testid="product-add-to-cart"
          to={ {
            pathname: '',
            state: product,
          } }
        >
          Adicionar ao carrinho
          </Link>
=======
        <img src={thumbnail} alt={title} />

        <button
          type="button"
          data-testid="product-add-to-cart"
          // id={id}
          onClick={() => this.addToCart(product)}
        >
          Adicionar ao carrinho
        </button>
>>>>>>> 4dbb86fb5606ce9dd3b48dc838e88052b0b5c688
      </div>
    );
  }
}
ProductCard.propTypes = {
  product: PropTypes.shape({
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

