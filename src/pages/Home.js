import React, { Component } from 'react';
import Category from '../components/Category';

class Home extends Component {
  render() {
    return (
      <div>
        <input type="search" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Category />
      </div>
    );
  }
}

export default Home;
