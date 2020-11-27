import React from 'react';
import PropTypes from 'prop-types';

import * as storageServices from '../services/storageServices';

class Itens extends React.Component {
  constructor(props) {
    super(props);

    this.updateValue = this.updateValue.bind(this);
    // this.deleteProduct = this.deleteProduct.bind(this);

    this.state = {
      quantity: 1,
    };
  }

  updateValue(operator) {
    const { updateProductsStorage } = storageServices;
    const { itens } = this.props;

    if (operator === 'sub') {
      const operatorMin = 0;
      if (itens.qtt > operatorMin) itens.qtt -= 1;
      updateProductsStorage(itens);
    } else {
      itens.qtt += 1;
      updateProductsStorage(itens);
    }

    this.setState({
      quantity: itens.qtt,
    });
  }

  // async deleteProduct() {
  //   const { delProductsStorage } = storageServices;
  //   const { itens } = this.props;
  //   await delProductsStorage(itens);
  // }

  render() {
    const { itens: { title, thumbnail, price } } = this.props;
    const { quantity } = this.state;
    return (
      <div>
        <button
          type="button"
          // onClick={ this.deleteProduct }
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
          {`Quantidade: ${quantity}`}
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
  itens: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    qtt: PropTypes.number.isRequired,
  }).isRequired,
};

export default Itens;
