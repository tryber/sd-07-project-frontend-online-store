import React from 'react';
import ShoppingCartButton from './ShoppingCartButton';

class ProductsList extends React.Component {
  render() {
    return (
      <div>
        <ShoppingCartButton />
        <div data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </div>
      </div>
    );
  }
}

export default ProductsList;
