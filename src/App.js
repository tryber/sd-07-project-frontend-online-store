import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={ Home } />
        <Route path="/cart" component={ Cart } />
      </BrowserRouter>
    </div>
  );
}

export default App;
