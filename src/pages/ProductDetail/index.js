import React from 'react';
import './ProductDetail.css';
import * as lsapi from '../../services/lsapi';

class ProductDetail extends React.Component {
  render() {
    const product = lsapi.getSelectedProduct();
    console.log('get', product);
    if (product) {
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
    return (
      <div className="detail-main-container">
        <p> Produto não encontrado </p>
      </div>
    );
  }
}

export default ProductDetail;
