import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProdoctCard extends React.Component {
  constructor() {
    super();

    this.addToCart = this.addToCart.bind(this);
    this.state = {};
  }

  addToCart(product) {
    const { title, thumbnail, price, id } = product;
    const { addItem } = this.props;
    addItem({ title, thumbnail, price, id, quantity: 1 });
  }

  render() {
    const { product } = this.props;
    const { thumbnail, title, price, id } = product;
    const categoryId = product.category_id;
    return (
      <div data-testid="product">
        <img src={ thumbnail } alt="Imagem do produto" />
        <h2>{ title }</h2>
        <h2>{ price }</h2>
        <Link
          to={ `/product/${categoryId}/${id}` }
          data-testid="product-detail-link"
        >
          Ver mais detalhes...
        </Link>
        <button
          type="submit"
          data-testid="product-add-to-cart"
          onClick={ () => this.addToCart(product) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProdoctCard.propTypes = {
  product: PropTypes.shape({
    category_id: PropTypes.string,
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
  addItem: PropTypes.func.isRequired,
};

export default ProdoctCard;
