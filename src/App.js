import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import * as api from './services/api';
import Home from './pages/Home';
import Cart from './pages/Cart';

class App extends React.Component {
  constructor() {
    super();

    this.testApi = this.testApi.bind(this);
  }

  componentDidMount() {
    this.testApi();
  }

  testApi() {
    api.getCategories().then((categories) => { console.log(categories); });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/Cart" component={ Cart } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
