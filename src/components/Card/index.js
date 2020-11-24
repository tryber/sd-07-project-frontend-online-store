import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { data } = this.props;
    const { title, thumbnail, price } = data;
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
  }).isRequired,
};

export default Card;
