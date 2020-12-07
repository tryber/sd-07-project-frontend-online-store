import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoToShoppingCart from './GoToShoppingCart';
import LogoTipo from './LogoTipo';
import IconeSearch from './IconeSearch';


class SearchBar extends Component {
  render() {
    const { onSearch, inputChange, inputValue } = this.props;
    return (
      <div className="main-search-content">
        <div className="main-search-content-logotipo">
          <LogoTipo />
        </div>

        <div className="main-search-content-search">
          <div className="main-search-content-iconesearch">
            <IconeSearch />
          </div>
          <label htmlFor="searchButton">
            <button
              className="bt-search"
              id="searchButton"
              type="button"
              onClick={ onSearch }
              data-testid="query-button"

            >
              Pesquisar
            </button>
            <input
              className="b-search"
              type="text"
              onChange={ inputChange }
              value={ inputValue }
              data-testid="query-input"
              placeholder="Digite algum termo de pesquisa ou escolha uma categoria"
            />
          </label>
        </div>
        <div className="main-search-container-but">
          <GoToShoppingCart />
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  inputChange: PropTypes.func.isRequired,
};

export default SearchBar;
