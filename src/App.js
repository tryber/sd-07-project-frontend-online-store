import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';


// Vamo que vamo

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ (ProductList) } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
