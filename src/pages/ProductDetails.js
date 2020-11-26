import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ProductAttributes from '../components/ProductAttributes';
import ShoppingCartButton from '../components/ShoppingCartButton';

class ProductDetails extends React.Component {
  render() {
    // const { id } = this.props.location.state.product;
    // console.log(id);
    const { title, price, thumbnail, attributes } = this.props.location.state.product;
    return (
      <div>
        <button type="button" onClick={this.props.history.goBack}>ImagemVoltar</button>
        <ShoppingCartButton />
        <h3 data-testid="product-detail-name">{`${title} R$${price}`}</h3>
        <img alt="Imagem do Poduto" src={ thumbnail } />
        <div>
          <h6>Especifições Técnicas</h6>
          {attributes.map(
            (attribute) => (
              <ProductAttributes
                key={ attribute.id }
                attribute={ attribute }
              />
            ),
          )}
        </div>
      </div>
    );
  }
}

// ProductAttributes.propTypes = {
//   product: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     price: PropTypes.string.isRequired,
//     pictures: PropTypes.arrayOf.isRequired,
//     attributes: PropTypes.arrayOf.isRequired,
//   }).isRequired,
// };


export default ProductDetails;
