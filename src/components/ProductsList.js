import React from 'react';
import PropTypes from 'prop-types';

class ProductsList extends React.Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <article data-testid='product'>
        <header>
          <h2>{title}</h2>
        </header>
        <main>
          <img alt='product thumbnail' src={thumbnail} />
        </main>
        <footer>
          <p>{`R$ ${price}`}</p>
        </footer>
      </article>
    );
  }
}

ProductsList.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductsList;
