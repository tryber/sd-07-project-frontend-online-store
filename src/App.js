import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';

import './App.css';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={ Home } /> 
        <Route exact path="/cartBuy" component={ Cart } />
        <Route exact path="/cartBuy/:id/" render={(props) => <Cart {...props} />} />             
      </Switch>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
