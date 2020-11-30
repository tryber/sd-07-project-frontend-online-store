import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Details extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/cardsLibrary">carrinho de compras</Link>
          <Link to="/">Return</Link>
        </div>
        <h2 data-testid="product-detail-name">
          Produto title - R$ price
        </h2>
        <div>
          <img alt="title" src="thumbnail" />
        </div>
        <div>
          <h3>Especificações técnicas</h3>
          <h4>title</h4>
          <h5>price</h5>
        </div>
      </div>
    );
  }
}
Details.propTypes = {
  location: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Details;
