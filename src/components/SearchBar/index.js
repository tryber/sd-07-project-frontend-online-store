import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

class SearchBar extends Component {
  render() {
    const { handleSubmit, handleTextInput } = this.props;
    return (
      <main>
        <div className="item-inputsearch">
          <h3 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h3>
          <div className="space-input-button">
            <input
              className="entrie-search"
              data-testid="query-input"
              type="text"
              name="input-text"
              id="input-text"
              placeholder="Pequisar"
              onChange={handleTextInput}
            />
            <button
              id="input-text"
              className="btn btn-info btn-xs search-button"
              data-testid="query-button"
              type="button"
              onClick={handleSubmit}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
              </svg>
              Pesquisar
            </button>
          </div>
        </div>
      </main>
    );
  }
}

SearchBar.propTypes = {
  parentState: PropTypes.shape({
    itemsFindOut: PropTypes.array,
    results: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    map: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleTextInput: PropTypes.func.isRequired,
};

export default SearchBar;
