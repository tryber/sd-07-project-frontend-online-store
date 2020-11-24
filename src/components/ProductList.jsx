import React from 'react';
import { Link } from 'react-router-dom';

class ProductList extends React.Component {
  render() {
    return (
      <form>
        <label data-testid="home-initial-message">
          <input type="text" />
          <Link data-testid="shopping-cart-button" to="/cart">
            Botão
          </Link>
          <br />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
      </form>
    );
  }
}

export default ProductList;
