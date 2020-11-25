import React, { Component } from 'react';
import './App.css';

import Categories from './components/Categories';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">TrybeLibre Online Store</header>
        <input />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Categories />
      </div>
    );
  }
}

export default App;
