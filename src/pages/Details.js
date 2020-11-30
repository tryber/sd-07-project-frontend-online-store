import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ShoppingCartButton } from '../components/index';

class Details extends Component {
  render() {
    const { location: { title, thumbnail, price } } = this.props;
    return (
      <div>
        <div>
          <Link to="/">Return</Link>
        </div>
        <div>
          <ShoppingCartButton />
        </div>
        <h2 data-testid="product-detail-name">
          {`Produto ${title} - R$ ${price}`}
        </h2>
        <div>
          <img alt={ title } src={ thumbnail } />
        </div>
        <h4>Especificações técnicas</h4>
        <ul>
          <li>{ title }</li>
          <li>{ price }</li>
        </ul>
      </div>
    );
  }
}
Details.propTypes = {
  location: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Details;
