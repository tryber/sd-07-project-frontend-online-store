import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import Categories from './components/Categories';

import Search from './components/Search';
import CartButton from './components/CartButton';
import CartEmptyMessage from './components/Cart';
import CardDetails from './components/CardDetail';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedCategory: '',
      products: [],
    };

    this.selectCategory = this.selectCategory.bind(this);
    this.updateProducts = this.updateProducts.bind(this);
  }

  updateProducts(products) {
    this.setState({ products });
  }

  selectCategory({ target }) {
    const { id } = target;
    this.setState({ selectedCategory: id });
  }

  render() {
    const { selectedCategory, products } = this.state;
    return (
      <BrowserRouter>
        <Categories selectCategory={ this.selectCategory } />
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (
              <Search
                selectedCategory={ selectedCategory }
                updateProducts={ this.updateProducts }
              />
            ) }
          />
          <Route path="/Cart" exact component={ CartEmptyMessage } />
          <Route
            path="/card/:id"
            render={ (props) => <CardDetails { ...props } products={ products } /> }
          />
        </Switch>
        <CartButton />
      </BrowserRouter>
    );
  }
}

export default App;
