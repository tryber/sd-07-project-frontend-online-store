import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductList extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        { products.map(({ id, title, thumbnail, price }) => (
          <div className="card" key={ id } data-testid="product">
            <h4>
              { title }
            </h4>
            <img src={ thumbnail } alt={ title } />
            <p>
              { price }
            </p>
            <Link to={ `/${id}` } data-testid="product-detail-link">Detalhes</Link>
          </div>
        ))}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductList;
