import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
// import './App.css';
import ProductsList from './pages/ProductsList';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ ProductsList } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
