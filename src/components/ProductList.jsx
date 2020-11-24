import React from 'react';
import { Link } from 'react-router-dom';
import CategoryList from './CategoryList';




class ProductList extends React.Component {
  render() {
    return (

      <div className="product-list">
        <CategoryList />
        
        <form className="first-input">
         <label data-testid="home-initial-message">
          <input type="text" />
          <Link data-testid="shopping-cart-button" to="/cart">
            Botão
          </Link>
          <br />
          Digite algum termo de pesquisa ou escolha uma categoria.
         </label>
        </form>
      </div>
    );
  }
}

export default ProductList;
