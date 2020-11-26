import React, { Component } from 'react';

class AddByDetails extends Component {
  render() {
    return (
      <div>
        <button
          type="button"
          onClick={ addOnCart }
          data-testid="product-detail-add-to-cart"
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}
export default AddByDetails;
