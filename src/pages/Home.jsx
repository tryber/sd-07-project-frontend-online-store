import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';

export default class Home extends Component {
  render() {
    return (
      <div>
        <header>
          <SearchBar />
        </header>
      </div>
    );
  }
}