import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      onClickEvent,
    } = this.props;
    return (
      <div>
        <input
          data-testid="query-input"
          onChange={ onSearchTextChange }
          type="text"
          value={ searchText }
          name="searchText"
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ onClickEvent }
        >
          Search
        </button>
      </div>
    );
  }
}
