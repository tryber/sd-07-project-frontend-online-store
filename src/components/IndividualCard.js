import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class IndividualCard extends Component {
  render() {
    const { key, price, image, title, id } = this.props;
    return (
      <div key={key} data-testid="product">
        <div className="main-category-result-content">
          <img src={image} alt="titulo" />
          <h4>{title}</h4>
          <p>R$ {price}</p>
          <Link to={`/product/${id}`}><button className="bt-det" type="button">Ver detalhes</button></Link>
          <button className="bt-add" type="button">Adicionar ao carrinho</button>
        </div>
      </div >
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
