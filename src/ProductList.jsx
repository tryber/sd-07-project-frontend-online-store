import React from 'react';
import CategoriesList from './CategoriesList';
import './App.css';

class ProductList extends React.Component {
  render() {
    return (
      <div className="product-list-container">
        <div className="categories-list">
          <CategoriesList />
        </div>
        <div className="product-list">
          <input type="text" size="50" />
          <span
            data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
          </span>
        </div>
      </div>
    )
  }
}

export default ProductList;
