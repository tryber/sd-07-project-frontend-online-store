import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import ShopPage from './Pages/ShopPage';
import './App.css';
import ItemDetail from './components/ItemDetail';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/shoppage" component={ ShopPage } />
        <Route path="/product/:id" render={ (props) => <ItemDetail { ...props } /> } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
