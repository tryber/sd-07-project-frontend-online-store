import React from 'react';
import PropTypes from 'prop-types';
import './ProductDetail.css';

class ProductDetail extends React.Component {
  render() {
    const { location: { state: { product } } } = this.props;
    return (
      <div className="detail-main-container">
        <div className="detail-title-content" data-testid="product-detail-name">
          <h2>{ product.title }</h2>
        </div>
        <div className="detail-info-container">
          <img
            className="detail-product-image"
            src={ product.thumbnail }
            alt="Product"
          />
          <div className="detail-summary-content">
            <h3> Especificações Técnicas </h3>
            <ul>
              {product.attributes.map(({ id, name, value_name: value }) => (
                <li key={ id }>{`${name}: ${value !== null ? value : 'N/D'}`}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        attributes: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          value_name: PropTypes.string,
        })).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetail;
