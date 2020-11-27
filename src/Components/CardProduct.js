import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import { Link } from 'react-router-dom';

class CardProduct extends React.Component {
  render() {
    const { product } = this.props;
    const { thumbnail, title, price } = product;
    return (
      <div data-testid="product" className="movie-card">
        <Link
          data-testid="product-detail-link"
          to={ `/productDetail/${title}` }
        >
          <h3>{title}</h3>
          <img className="movie-card-image" src={ thumbnail } alt="Imagem do Produto" />
          <h4>
            R$
            { price }
          </h4>
        </Link>
      </div>
    );
  }
}

CardProduct.propTypes = { product: PropTypes.objectOf.isRequired };

export default CardProduct;
