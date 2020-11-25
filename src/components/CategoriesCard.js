import React from 'react';
import PropTypes from 'prop-types';


class CategoriesCard extends React.Component {
  render() {
    const { product } = this.props;
    const { thumbnail, title, price } = product;
    return (
      <div data-testid="product">
        <img src={ thumbnail } alt="Imagem do produto" />
        <h2>{ title }</h2>
        <h2>{ price }</h2>
      </div>
    );
  }
}

CategoriesCard.propTypes = {
  product: PropTypes.array }.isRequired;

export default CategoriesCard;
