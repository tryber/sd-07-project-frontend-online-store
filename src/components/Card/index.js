import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    const { data } = this.props;
    const { title, thumbnail, price, id } = data;
    return (
      <article data-testid="product">
        <header>
          <h2>{title}</h2>
        </header>
        <main>
          <img alt="product thumbnail" src={ thumbnail } />
        </main>
        <footer>
          <p>{`R$ ${price}`}</p>
          <Link to={`/product/${id}`} data-testid="product-detail-link">Detalhes do produto</Link>
        </footer>
      </article>
    );
  }
}

Card.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
