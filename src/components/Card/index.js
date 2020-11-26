import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    let { searchInput } = this.props;
    const {
      categoryID,
      data: { title, thumbnail, price, id },
    } = this.props;
    searchInput = (searchInput !== '') ? searchInput : false;
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
          <Link
            to={ `/product/${id}/${categoryID}/${searchInput}` }
            data-testid="product-detail-link"
          >
            Detalhes do produto
          </Link>
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
  categoryID: PropTypes.string.isRequired,
  searchInput: PropTypes.string.isRequired,
};

export default Card;
