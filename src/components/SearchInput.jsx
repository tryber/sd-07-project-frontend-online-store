import React from 'react';
import PropTypes from 'prop-types';
import Lupa from '../img/lupa-black.svg';

class SearchInput extends React.Component {
  render() {
    const { searchInput, onInputSearchChange, buttonSearch } = this.props;
    return (
      <div className="div-search">
        <input
          className="input-search"
          data-testid="query-input"
          type="text"
          name="inputSearch"
          value={ searchInput }
          onChange={ onInputSearchChange }
        />
        <button
          className="button-search"
          data-testid="query-button"
          type="submit"
          onClick={ buttonSearch }
        >
          <img src={ Lupa } className="kart-icon" alt="Botão carrinho de compras" />
        </button>
      </div>
    );
  }
}

SearchInput.defaultProps = {
  searchInput: '',
};

SearchInput.propTypes = {
  searchInput: PropTypes.string,
  onInputSearchChange: PropTypes.func.isRequired,
  buttonSearch: PropTypes.func.isRequired,
};

export default SearchInput;
