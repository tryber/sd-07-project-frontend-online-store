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

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedCategory: '',
    };

    this.selectCategory = this.selectCategory.bind(this);
  }

  selectCategory({ target }) {
    const { id } = target;
    this.setState({ selectedCategory: id });
  }

  render() {
    const { selectedCategory } = this.state;
    return (
      <BrowserRouter>
        <Categories selectCategory={ this.selectCategory } />
        <Switch>
          <Route
            exact
            path="/"
            render={ () => <Search selectedCategory={ selectedCategory } /> }
          />
          <Route path="/Cart" exact component={ CartEmptyMessage } />
        </Switch>
        <CartButton />
      </BrowserRouter>
    );
  }
}

export default App;
