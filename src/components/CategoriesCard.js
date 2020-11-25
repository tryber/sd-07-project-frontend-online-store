import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CategoriesCard extends React.Component {
  render() {
    const { product } = this.props;
    const { thumbnail, title, price, category_id, id } = product;
    //console.log(product);
    return (
      <div data-testid="product">
        <img src={ thumbnail } alt="Imagem do produto" />
        <h2>{ title }</h2>
        <h2>{ price }</h2>
        <Link to={`/product/${category_id}/${title}/${id}`}>Ver mais detalhes...</Link>
      </div>
    );
  }
}

CategoriesCard.propTypes = {
  product: PropTypes.array }.isRequired;

export default CategoriesCard;
