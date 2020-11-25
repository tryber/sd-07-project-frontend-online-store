import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { searchEventHandler, searchOnChange } = this.props;
    return (
      <div className="search-bar">
        <input
          type="text"
          data-testid="query-input"
          onInput={ searchOnChange }
          name="message"
          placeholder="Type your message here..."
          className="form-control"
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ searchEventHandler }
        >
          Pesquisar
        </button>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchEventHandler: PropTypes.func.isRequired,
  searchOnChange: PropTypes.func.isRequired,
};

export default SearchBar;
