import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { onSearch, inputChange, inputValue } = this.props;
    return (
      <div className="main-search-content">
        <div className="main-search-content-search">
          <label htmlFor="searchButton">
            <button
              className="bt-search"
              id="searchButton"
              type="button"
              onClick={onSearch}
              data-testid="query-button"

            >
              Pesquisar
          </button>
            <input
              className="b-search"
              type="text"
              onChange={inputChange}
              value={inputValue}
              data-testid="query-input"
              placeholder="Digite algum termo de pesquisa ou escolha uma categoria"
            />
          </label>
        </div>
        <div className="main-search-container-but">
          <Link to="/shoppingCart">
            <button className="bt-but" type="button" data-testid="shopping-cart-button">
              Comprar
          </button>
          </Link>
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  inputValue: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  inputChange: PropTypes.func.isRequired,
};

export default SearchBar;
