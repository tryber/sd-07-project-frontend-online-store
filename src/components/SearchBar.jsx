import React from "react";
import { Link } from "react-router-dom";

class SearchBar extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { query, onChange, onClick } = this.props;
    return (
      <header>
        <input 
          name="query" 
          type="text"
          data-testid="query-input" 
          id="search-input" 
          value={query} 
          onChange={onChange}
        />
        
        <button onClick={onClick} data-testid="query-button">Pesquisar</button>

        <Link data-testid="shopping-cart-button" to={"/pages/shopping-cart"}>
          Carrinho
        </Link>
      </header>
    );
  }
}

export default SearchBar;
