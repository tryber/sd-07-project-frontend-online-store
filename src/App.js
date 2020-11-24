import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import * as api from './services/api';
import ProductListing from './pages/productListing';

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

        <BrowserRouter>

          <Route exact path="/" component={ ProductListing } />

        </BrowserRouter>

      </div>
    );
  }
}

export default App;
