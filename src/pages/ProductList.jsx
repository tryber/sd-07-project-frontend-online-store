import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonCart from '../components/ButtonCart';

class ProductList extends Component {
  render() {
    const { title, image, price, id } = this.props;
    return (
      <div data-testid="product">
        <h2>{ title }</h2>
        <img src={ image } alt="" />
        <p>{ price }</p>
        <Link
          to={ { pathname: `/details/${id}`, state: { title } } }
          data-testid="product-detail-link"
        >
          Detalhes
        </Link>
        <ButtonCart title={ title } test="product-add-to-cart" />
      </div>
    );
  }
}

export default ProductList;

ProductList.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};
