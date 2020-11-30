import React from 'react';
import Evaluation from '../components/Evaluation';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
  render() {
    const { location } = this.props;
    const { title, thumbnail, price, attributes } = location.product;
    return (
      <div>
        <div>
          <h1 data-testid="product-detail-name">
            { title }
            <span>{ price }</span>
          </h1>
          <img src={ thumbnail } alt="Ilustração produto" />
        </div>
        <ul>
          <h2>Especificações Técnicas</h2>
          {attributes
            .map((attribute) => (
              <li key={ attribute.id }>
                { attribute.name }
                { attribute.value_name }
              </li>))}
        </ul>
        <Evaluation />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    product: PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      attributes: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
