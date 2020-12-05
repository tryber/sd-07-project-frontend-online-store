import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { stateActual, responseGetProducts, query } = this.props;
    return (
      <div>
        <input
          data-testid="query-input"
          value={ query }
          onChange={ stateActual }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ responseGetProducts }
        >
          Pesquisar
        </button>
      </div>
    );
  }
}

SearchBar.propTypes = {
  stateActual: PropTypes.func.isRequired,
  responseGetProducts: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default SearchBar;
