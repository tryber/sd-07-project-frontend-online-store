import React, { Component } from "react";

import './style.css'

class SearchBar extends Component {
  render() {
    return (
      <input
        className='search-bar'
        data-testid="query-input"
        onChange={this.props.onSearchText}
        value={this.props.searchText}
      />
    );
  }
}

export default SearchBar;
