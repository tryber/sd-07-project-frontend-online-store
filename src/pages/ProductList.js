import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductList extends React.Component {
  render() {
    const { products } = this.props;
    return (<div>
        { products.map(({ id, title, thumbnail, price }) => (
          <Link to={ `/${id}` } data-testid="product-detail-link">
            <div className="card" key={ id } data-testid="product">
              <h4>
                { title }
              </h4>
              <img src={ thumbnail } alt={ title } />
              <p>
                { price }
              </p>
            </div>
          </Link>
        ))}
        </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductList;
