import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Search from './Components/Search';
import ButtonCart from './Components/ButtonCart';
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
