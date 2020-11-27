import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartButton from './CartButton';

export default class ProductsList extends React.Component {
  render() {
    const { productList } = this.props;
    return (
      <ul>
        {productList.length
          ? productList.map(({ id, title, thumbnail, price }) => (
            <li
              key={ id }
              data-testid="product"
            >
              <Link
                to={ {
                  pathname: '/Product',
                  state: {
                    productName: title,
                    productImg: thumbnail,
                    productPrice: price,
                  },
                } }
                data-testid="product-detail-link"
                key={ `${title} ${id}` }
              >
              <div>
                <h4>{ title }</h4>
                <img src={ thumbnail } alt="Product" />
                <p>{ price }</p>
                <CartButton datatestid="product-add-to-cart" productName={ title } />
              </div>
            </Link>
            </li>
          )) : (<li> Nenhum produto foi encontrado </li>)}
      </ul>
    );
  }
}

ProductsList.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
