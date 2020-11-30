import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonCart from '../ButtonCart';

const ProductList = ({ title, image, price, id, upQty, availableQt, fs }) => (
  <div data-testid="product">
    <h2>{ title }</h2>
    <img src={ image } alt="" />
    <p>{ price }</p>
    { fs && <p data-testid="free-shipping">Frete grátis</p>}
    <Link
      to={ { pathname: `/details/${id}`, state: { title, fs } } }
      data-testid="product-detail-link"
    >
      Detalhes
    </Link>
    <ButtonCart
      title={ title }
      test="product-add-to-cart"
      upQty={ upQty }
      availableQt={ availableQt }
    />
  </div>
);

export default ProductList;

ProductList.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  availableQt: PropTypes.number.isRequired,
  fs: PropTypes.bool.isRequired,
  upQty: PropTypes.func.isRequired,
};
