import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CardDetails extends React.Component {
  render() {
    const { match, products } = this.props;
    const { id } = match.params;
    const card = products.find((product) => product.id === id);
    const { title, thumbnail, price } = card;

    return (
      <div>
        <Link to="/">Voltar</Link>
        <h3 data-testid="product-detail-name">{ title }</h3>
        <span>{ price }</span>
        <img src={ thumbnail } alt={ title } />
      </div>
    );
  }
}

CardDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
};

export default CardDetails;
