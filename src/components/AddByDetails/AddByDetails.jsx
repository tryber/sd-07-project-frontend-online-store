import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddByDetails extends Component {
  constructor(props) {
    super(props);
    this.addCartItem = this.addCartItem.bind(this);
  }

  addCartItem() {
    const { productSelected } = this.props;
    const previousProducts = JSON.parse(localStorage.getItem('cart')) || [];
    const findProduct = previousProducts
      .find((SCproduct) => SCproduct.thumbnail === productSelected.thumbnail);
    const newProduct = {
      key: productSelected.id,
      title: productSelected.title,
      thumbnail: productSelected.thumbnail,
      id: productSelected.id,
      price: productSelected.price,
      quantity: 1,
    };

    if (!findProduct) {
      previousProducts.push(newProduct);
    } else {
      findProduct.quantity += 1;
    }

    this.setState(
      () => ({ listProducts: previousProducts }),
      () => {
        const { listProducts } = this.state;
        localStorage.setItem('cart', JSON.stringify(listProducts));
      },
    );
  }

  render() {
    return (
      <div>
        <button
          onClick={ this.addCartItem }
          type="button"
          data-testid="product-detail-add-to-cart"
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

AddByDetails.propTypes = {
  productSelected: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired };

export default AddByDetails;
