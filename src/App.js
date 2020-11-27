import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './pages/Main';
import ShoppinCart from './pages/ShoppinCart';
import DetailsProduct from './pages/DetailsProduct';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ Main } />
        <Route path="/shoppingCart" component={ ShoppinCart } />
        <Route path="/detailsProduct/:id" component={ DetailsProduct } />
      </BrowserRouter>
    );
  }
}

export default App;
