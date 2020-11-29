import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class ProductDetails extends React.Component {
  render() {
    const { location } = this.props;
    const { product } = location;
    const { item } = product;
    return (
      <div className="page-container">
        <div className="page-sub-container">
          <div className="product-container">
            <img alt="Imagem do produto" src={ item.thumbnail } />
            <h2 data-testid="product-detail-name">{ item.title }</h2>
            <p>{ `R$ ${item.price}` }</p>
          </div>
        </div>
          {/* <button >Adicionar</button> */}
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    product: PropTypes.shape({
      item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
