import React from 'react';
import PropTypes from 'prop-types';

class ProductSpecs extends React.Component {
  render() {
    const { title, price, thumbnail } = this.props;
    return (
      <div>
        <h3 data-testid="product-detail-name">{`${title} - R$ ${price}`}</h3>
        <img src={ thumbnail } alt="Imagem do produto" />
        <div>
          <ul>
            <li>Especificação 01</li>
            <li>Especificação 02</li>
            <li>Especificação 03</li>
            <li>Especificação 04</li>
            <li>Especificação 05</li>
            <li>Especificação 06</li>
            <li>Especificação 07</li>
          </ul>
        </div>
      </div>
    );
  }
}

ProductSpecs.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default ProductSpecs;
