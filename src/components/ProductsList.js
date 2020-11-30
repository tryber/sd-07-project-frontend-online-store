import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// code idea based on <GP-7><Thx!>
class ProductsList extends React.Component {
  render() {
    const { productList } = this.props;
    return (
      <div>
        <br />
        <ul>
          {productList.length
            ? productList.map(({ id, title, thumbnail, price }) => (
              <li
                key={id}
                data-testid="product"
              >
              <Link
                to={{
                  pathname: '/product-details',
                  state: {
                    id,
                    productName: title,
                    productImg: thumbnail,
                    productPrice: price,
                  },
                }}
                data-testid="product-detail-link"
                key={`${title} ${id}`}
                >
                  <h3>{ title }</h3>
                  <img src={ thumbnail } alt="Product" />
                  <p>{ price }</p>
                </Link>
              </li>
            )) : (<li> Nenhum produto foi encontrado </li>)}
        </ul>
      </div>

    );
  }
}
ProductsList.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductsList;
