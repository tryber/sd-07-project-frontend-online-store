import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartButton from './CartButton';
<<<<<<< HEAD
import { handleAddItemToCart } from '../services/utils';
=======
>>>>>>> 09a5c6ca758e272420dba9b836615dcaa619cbc5

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
<<<<<<< HEAD
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
=======
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
                </div>
              </Link>
              <CartButton datatestid="product-add-to-cart" productName={ title } />
>>>>>>> 09a5c6ca758e272420dba9b836615dcaa619cbc5
            </li>
          )) : (<li> Nenhum produto foi encontrado </li>)}
      </ul>
    );
  }
}

ProductsList.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
