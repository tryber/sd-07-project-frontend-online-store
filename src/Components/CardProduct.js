import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../App.css'

class CardProduct extends React.Component {
  render() {
    const { product, termo } = this.props;
    const { thumbnail, title, price,id, category_id } = product;
    return (
      <div data-testid="product" className="product-card" >
       <Link data-testid="product-detail-link" to={`/product/${category_id}/${termo}/${id}`}>
        <h3>{title}</h3>
        <img className="product-card-image" src={thumbnail} alt="Imagem do Produto" />
        <h4>R${price}</h4>
        </Link>
      </div>
    );
  }
}

CardProduct.propTypes = { product: PropTypes.objectOf.isRequired };

export default CardProduct;
