import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as storageServices from '../services/storageServices';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);

    this.addProductCart = this.addProductCart.bind(this);
  }

  async addProductCart() {
    const { product } = this.props;
    const { thumbnail, title, price, id } = product;
    const addItem = {
      id,
      title,
      thumbnail,
      price,
      qtt: 1,
    };

    await storageServices.setProductsStorage(addItem);
  }

  render() {
    const { product } = this.props;
    const { thumbnail, title, price } = product;
    const indexOne = 0;
    const indexTwo = 8;
    const subtitle = title.substring(indexOne, indexTwo);
    return (
      <div>
        <Link data-testid="product-detail-link" to={ `/detail/${subtitle}` }>
          <div data-testid="product">
            <img src={ thumbnail } alt="Imagem do produto" />
            <h4>{title}</h4>
            <h3>{price}</h3>
          </div>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          id={ product }
          onClick={ this.addProductCart }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
