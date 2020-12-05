import React from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends React.Component {
  render() {
    const { searchText, onChange, onClick } = this.props;
    return (
      <div className="search-bar">
        <input
          className="search-input"
          data-testid="query-input"
          onChange={ onChange }
          type="text"
          value={ searchText }
          name="searchText"
        />
        <button
          className="search-button"
          data-testid="query-button"
          type="button"
          onClick={ onClick }
        >
          Search
        </button>
      </div>
    );
  }
}
SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
