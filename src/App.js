import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import './App.css';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Search } />
        <Route exact path="/cartBuy" component={ ButtonCart } />     
      </Switch>
    </div>
  );
}

export default App;
