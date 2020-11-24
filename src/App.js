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
      <div className="App">
        <Router>
          <div>Projeto</div>
          <Link data-testid="shopping-cart-button" to="/cart">
            CART
          </Link>
          <Switch>
            <Route path="/cart" component={CartList} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
