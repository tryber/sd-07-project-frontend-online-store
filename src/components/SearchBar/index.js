import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

class SearchBar extends Component {
  render() {
    const { handleChange, handleClick } = this.props;
    return (
      <div className="search-container">
        <input
          type="text"
          name="query"
          data-testid="query-input"
          onChange={ handleChange }
        />
        <button
          type="submit"
          data-testid="query-button"
          onClick={ handleClick }
        >
          Pesquisar
        </button>
        <br />
        <span
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
      </div>
    );
  }
}

SearchBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default SearchBar;
