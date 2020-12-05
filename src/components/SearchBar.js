import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class SearchBar extends Component {
  render() {
    const { handleSubmit, handleTextInput } = this.props;
    return (
      <main>
        <div className="item-inputsearch">
          <h5 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h5>
          <input
            className="entrie-search"
            data-testid="query-input"
            type="text"
            name="input-text"
            id="input-text"
            onChange={ handleTextInput }
          />
          <hr />
          <button
            id="input-text"
            className="btn btn-info btn-xs"
            data-testid="query-button"
            type="button"
            onClick={ handleSubmit }
          >
            Pesquisar
          </button>
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
