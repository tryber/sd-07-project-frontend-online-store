import React, { Component } from 'react';
import * as css from './style';
import * as cp from '../../components';
import * as icon from '../../components/Icons';


class SearchInput extends Component {
  render() {
    return(
      <css.cpnCenter >
        <div className="search-bar">
          <cp.Input width="100%" />
          <icon.Search size="0.5em" className="icon-search" />
        </div>
        <cp.Button />
        <icon.Cart />
      </css.cpnCenter>
    );
  }
}

export default SearchInput;