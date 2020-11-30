import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import './App.css';
import ShoppingCart from './pages/ShoppingCard';

class App extends Component {
  constructor() {
    super();
    this.addToCard = this.addToCard.bind(this);
    this.state = {
      shoppingCard: [],
    };
  }

  addToCard(id, title, price, thumbnail) {
    const addProduct = {
      id,
      title,
      quantity: 1,
      price,
      thumbnail,
    };
    const { shoppingCard } = this.state;
    const foundProduct = shoppingCard.findIndex((product) => product.id === id);
    const productNotFound = -1;
    if (foundProduct === productNotFound) {
      return this.setState((oldState) => ({
        shoppingCard: [...oldState.shoppingCard, addProduct],
      }));
    }
    shoppingCard[foundProduct].quantity += 1;
    this.setState({
      shoppingCard,
    });
  }

  render() {
    const { shoppingCard } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (
              <Home
                shoppingCard={ shoppingCard }
                addToCard={ this.addToCard }
              />
            ) }
          />
          <Route
            exact
            path="/shoppingCart"
            render={ (props) => <ShoppingCart { ...props } /> }
          />
          <Route
            exact
            path="/details/:id"
            render={ (props) => (
              <Details
                { ...props }
                shoppingCard={ shoppingCard }
                addToCard={ this.addToCard }
              />
            ) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
