import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { handleChange, onClick } = this.props;
    return (
      <div>
        <input
          data-testid="query-input"
          type="search"
          name="query"
          onChange={ (event) => handleChange(event) }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ onClick }
        >
          BUSCAR
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

SearchBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SearchBar;
