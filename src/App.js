import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import PageCard from './pages/PageCard';
// import './App.css';
import ProductsList from './pages/ProductsList';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ ProductsList } />
          <Route exact path="/PageCard" component={ PageCard } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
