import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckoutCard extends Component {
  render() {
    const { key, price, image, title, id } = this.props;
    return (
      <div key={ key } data-testid="product">
        <div className="main-category-result-content" id={ id }>
          <h4>{ title }</h4>
          <img src={ image } alt="titulo" />
          <p>{ price }</p>
        </div>
      </div>
    );
  }
}

CheckoutCard.propTypes = {
  key: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default CheckoutCard;
