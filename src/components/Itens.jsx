import React from 'react';
import PropTypes from 'prop-types';

import * as storageServices from '../services/storageServices';

class Itens extends React.Component {
  constructor(props) {
    super(props);

    this.updateValue = this.updateValue.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  updateValue(operator) {
    const { updateProductsStorage } = storageServices;
    const { item, getStorageItens } = this.props;

    if (operator === 'sub') {
      const operatorMin = 1;
      if (item.qtt > operatorMin) item.qtt -= 1;
      updateProductsStorage(item);
    } else {
      item.qtt += 1;
      updateProductsStorage(item);
    }
    this.setState({});

    getStorageItens();
  }

  async deleteProduct({ target }) {
    const { getStorageItens } = this.props;
    const itemId = { id: target.id };
    await storageServices.delProductsStorage(itemId);
    this.setState({});
    getStorageItens();
  }

  render() {
    const { item: { id, title, thumbnail, price, qtt } } = this.props;
    return (
      <div>
        <button
          id={ id }
          type="button"
          onClick={ this.deleteProduct }
        >
          X
        </button>
        <h1 data-testid="shopping-cart-product-name">{ title }</h1>
        <img src={ thumbnail } alt={ title } />
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ () => this.updateValue('sub') }
        >
          -
        </button>
        <span data-testid="shopping-cart-product-quantity">
          {`Quantidade: ${qtt}`}
        </span>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ () => this.updateValue('sum') }
        >
          +
        </button>
        <span>{`Preço: ${price}`}</span>
      </div>
    );
  }
}

Itens.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    qtt: PropTypes.number.isRequired,
  }).isRequired,
  getStorageItens: PropTypes.func.isRequired,
};

export default Itens;
