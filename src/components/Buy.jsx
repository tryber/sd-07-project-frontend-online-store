import React, { Component } from 'react';

class Buy extends Component {
  render() {
    const { id, title, price, thumbnail, addToCard } = this.props;
    return (
      <button
        type="button"
        data-testid="product-add-to-cart"
        onClick={ () => addToCard(id, title, price, thumbnail) }
      >
        Comprar
      </button>
    );
  }
}

export default Buy;
