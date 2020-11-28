import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ButtonCart, Evaluation } from '../../components';

const Details = ({ location: { state: { title } } }) => (
  <div>
    <Link data-testid="shopping-cart-button" to="/cart">
      <i className="fas fa-shopping-cart" />
    </Link>
    <h2 data-testid="product-detail-name">{ title }</h2>
    <ButtonCart title={ title } test="product-detail-add-to-cart" />
    <Evaluation />
  </div>
);

export default Details;

Details.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
