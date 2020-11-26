import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProdoctCard extends React.Component {
  render() {
    const { product } = this.props;
    const { thumbnail, title, price, category_id, id } = product;
    //console.log(product);
    return (
      <div data-testid="product">
        <img src={ thumbnail } alt="Imagem do produto" />
        <h2>{ title }</h2>
        <h2>{ price }</h2>
        <Link to={`/product/${category_id}/${id}`} data-testid="product-detail-link">Ver mais detalhes...</Link>
      </div>
    );
  }
}

ProdoctCard.propTypes = {
  product: PropTypes.array }.isRequired;

export default ProdoctCard;
