import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductsList extends React.Component {
  render() {
    const { productList } = this.props;
    return (
      <ul>
        {productList.length
          ? productList.map(({ id, title, thumbnail, price }) => (
            <Link to="/Product" data-testid='product-detail-link' key={ `${title} ${id}` } onClick={ '' }>
              <li
                key={ id }
                data-testid="product"
              >
                <h4>{ title }</h4>
                <img src={ thumbnail } alt="Product" />
                <p>{ price }</p>
              </li>
            </Link>
          )) : (<li> Nenhum produto foi encontrado </li>)}
      </ul>
    );
  }
}

ProductsList.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
