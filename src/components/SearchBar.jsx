import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onChange,
      onClick,
    } = this.props;
    return (
      <div>
        <input
          data-testid="query-input"
          onChange={ onChange }
          type="text"
          value={ searchText }
          name="searchText"
        />
        <button
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
