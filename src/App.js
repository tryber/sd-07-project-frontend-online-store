import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import ButtonCart from './Pages/Cart';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/cartBuy" component={ ButtonCart } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
