import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import * as api from './services/api';
import Home from './pages/Home';

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
            <Route path="/" component={ Home } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
