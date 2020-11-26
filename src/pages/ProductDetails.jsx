import React from 'react';
import PropTypes from 'prop-types';
import './ProductDetails.css';
import ProductReview from '../components/productDetails/ProductReview';

class ProductDetails extends React.Component {
  productNamePrice() {
    const { location: { details: { product: { title, price } } } } = this.props;
    return (
      <div className="product-details-name">
        <h1 data-testid="product-detail-name">{title}</h1>
        {/* <h2>{`R$ ${Number(price).toFixed(2)}`}</h2> */}
        <h2>{`R$ ${Number(price).toFixed()}`}</h2>
      </div>
    );
  }

  productPhoto() {
    const { location: { details: { product: { title, thumbnail } } } } = this.props;
    return (
      <div className="product-details-photo">
        <img src={ thumbnail } alt={ `Foto do ${title}` } />
      </div>
    );
  }
  render() {
    return (
      <div className="product-detail-container">
        <div>
          {this.productNamePrice()}
          <div className="produc-details-contents">
            {this.productPhoto()}
            <div className="product-details-right">
              <h3>Especificações Técnicas</h3>
            </div>
          </div>
          <ProductReview />
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    details: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export default ProductDetails;
