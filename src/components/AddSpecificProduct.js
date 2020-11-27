import React, { Component } from 'react';

class AddSpecificProduct extends Component {
  render() {
    const { addShoppingCartItems } = this.props;

    return (
      <button
        type="button"            
        onClick={ addShoppingCartItems }        
      >
        Adicionar ao carrinho
      </button>
        )
    }
}

export default AddSpecificProduct;