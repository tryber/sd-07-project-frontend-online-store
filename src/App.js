import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
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
      <div className="App">
        <Router>
          <div>Projeto</div>
          <Link data-testid="shopping-cart-button" to="/cart">
            CART
          </Link>
          <Switch>
            <Route path="/cart" component={CartList} />
            <Route exact path="/" component={ ProductListing } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
