import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { inputValue, handleChange, handleSubmitAPI } = this.props;
    return (
      <div>
        <input
          data-testid="query-input"
          value={ inputValue }
          onChange={ handleChange }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ handleSubmitAPI }
        >
          BUSCAR
        </button>
      </div>);
  }
}

SearchBar.propTypes = {
  inputValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmitAPI: PropTypes.func.isRequired,
};

export default SearchBar;
