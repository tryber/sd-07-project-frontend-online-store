import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <label>
          <button>Botão de pesquisa</button>
          <input type="text"/>
        </label>
        <Link to="/shoppingCart"><button>Carrinho de compras</button></Link>
      </div>
    );
  }
}

export default SearchBar;
