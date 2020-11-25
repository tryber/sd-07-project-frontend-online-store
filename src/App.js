import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import ShopPage from './Pages/ShopPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/shoppage" component={ ShopPage } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
