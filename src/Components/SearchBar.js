import React from 'react';
import PropTypes from 'prop-types';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.searchButton = this.searchButton.bind(this);
    this.state = {
      searchText: '',
    };
  }

  searchButton() {
    const { handlerSearch } = this.props;
    const { searchText } = this.state;
    handlerSearch(searchText);
  }

  handleChange({ target }) {
    this.setState({
      searchText: target.value,
    });
  }

  render() {
    return (
      <div className="search-bar">
        <input
          data-testid="query-input"
          type="text"
          onChange={ this.handleChange }
          placeholder="Buscar produtos, marcas e muito mais..."
          className="search-bar-input"
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.searchButton }
          className="search-bar-button"
        >
          <img
            src="../Images/search.png"
            alt="search-icon"
            className="button-img"
          />
        </button>
      </div>
    );
  }
}

SearchBar.propTypes = {
  handlerSearch: PropTypes.func.isRequired,
};

export default SearchBar;
