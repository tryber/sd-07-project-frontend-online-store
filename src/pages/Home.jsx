import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import ListCategories from '../components/ListCategories';

export default class Home extends Component {
  render() {
    return (
      <div>
        <header>
          <SearchBar />
          <ListCategories />
        </header>
      </div>
    );
  }
}
