import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends Component {
  render() {
    const { onSearch, inputChange, inputValue } = this.props;
    return (
      <div>
        <label htmlFor="searchButton">
          <button id="searchButton" type="button" onClick={ onSearch }>Botão de pesquisa</button>
          <input type="text" onChange={ inputChange } value={ inputValue } />
        </label>
        <Link to="/shoppingCart"><button type="button">Carrinho de compras</button></Link>
      </div>
    );
  }
}

export default SearchBar;
