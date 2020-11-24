import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CategoriesList from './pages/CategoriesList';

import Products from './pages/Products';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Products } />
          </Switch>
        </BrowserRouter>
        <CategoriesList />
      </div>
  
    );
  }
}

export default App;
