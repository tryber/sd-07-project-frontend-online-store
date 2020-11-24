import React, { Component } from 'react';

class ProductListing extends Component {
  render() {
    return (
      <div>
        <input className="search-category" type="text" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default ProductListing;
