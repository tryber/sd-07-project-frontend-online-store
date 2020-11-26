import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShoppingCart from './components/shoppingCart';
import ProductDetail from './pages/productDetail';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      Hello Trybers
      {/* <Header /> */}
      <Router>
        <Switch>
          <Route exact path="/shoppingCart" component={ ShoppingCart } />
          <Route exact path="/" component={ Home } />
          <Route exact path="/productDetail/:id" component={ ProductDetail} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
