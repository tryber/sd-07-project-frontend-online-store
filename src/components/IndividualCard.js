import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class IndividualCard extends Component {
  render() {
    const { key, price, image, title, id } = this.props;
    return (
      <div key={ key } data-testid="product">
        <h4>{ title }</h4>
        <img src={ image } alt="titulo" />
        <p>{ price }</p>
        <Link to={ `/product/${id}` }><button data-testid="product-detail-link" type="button">Ver detalhes</button></Link>
        <br />
        <button type="button">Adicionar ao carrinho</button>
      </div>
    );
  }
}

IndividualCard.propTypes = {
  key: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default IndividualCard;
