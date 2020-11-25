import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { InitialScreen, Kart } from './components';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.addToShoppingCart = this.addToShoppingCart.bind(this);

    this.state = {
      shoppingKart: [],
    };
  }

  addToShoppingCart(product) {
    // const { shoppingKart } = this.state;
    // product.quantity = 1;

    // shoppingKart.forEach((element) => {
    //   if (product.title === element.title) {
    //     element.quantity += 1;
    //   } else {
    //     this.setState((state) => ({
    //       shoppingKart: [...state.shoppingKart, product],
    //     }));
    //   }
    // });

    this.setState((state) => ({
      shoppingKart: [...state.shoppingKart, product],
    }));
  }

  render() {
    const { shoppingKart } = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={ () => <InitialScreen addToShoppingCart={ this.addToShoppingCart } /> } />
          <Route exact path="/kart" render={ () => <Kart shoppingKart={ shoppingKart } /> } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
