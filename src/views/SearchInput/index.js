import React, { Component } from 'react';
import * as css from './style';
import * as cp from '../../components';
import * as icon from '../../components/Icons';


class SearchInput extends Component {
  render() {
    return (
      <css.ctnCenter className='teste'>
        <div className='ctn-search-bar'>
          <cp.Input className='input' />
          <icon.Search className='icon-search' />
        </div>
        <cp.Button>Buscar</cp.Button>
        <icon.Cart />
      </css.ctnCenter>
    );
  }
}

export default SearchInput;
