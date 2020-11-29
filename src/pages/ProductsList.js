import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartButton from './CartButton';
import { handleAddItemToCart } from '../services/utils';

export default class ProductsList extends React.Component {
  render() {
    const { productList } = this.props;
    return (
      <ul>
        {productList.length
          ? productList.map((product) => (
            <li
              key={ product.id }
              data-testid="product"
            >
              <Link
                to={ {
                  pathname: '/Product',
                  state: {
                    product,
                  },
                } }
                data-testid="product-detail-link"
                key={ `${product.title} ${product.id}` }
              >
                <div>
                  <h4>{ product.title }</h4>
                  <img src={ product.thumbnail } alt="Product" />
                  <p>{ product.price }</p>
                </div>
              </Link>
              <CartButton
                datatestid="product-add-to-cart"
                product={ product }
                addItemToCart={ handleAddItemToCart }
              />
            </li>
          )) : (<li> Nenhum produto foi encontrado </li>)}
      </ul>
    );
  }
}

ProductsList.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
