import React, { Component } from 'react';
import './App.css';
import * as api from './services/api';

class App extends Component {
  componentDidMount() {
    // exemplos de utilização da API
    api.getCategories().then((categories) => console.log(categories));
    api
      .getProductsFromCategoryAndQuery('MLB5672', 'Pneu')
      .then((result) => console.log(result));
  }

  render() {
    return (
      <div>
        <h1>Title</h1>
      </div>
    );
  }
}

export default App;
