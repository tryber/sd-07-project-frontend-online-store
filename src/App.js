import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import './App.css';
import ShoppingCart from './pages/ShoppingCard';
import Checkout from './pages/Checkout';

class App extends Component {
  constructor() {
    super();
    this.addToCard = this.addToCard.bind(this);
    this.changeQuantity = this.changeQuantity.bind(this);
    this.removeItem = this.removeItem.bind(this);
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

  removeItem(id) {
    const { shoppingCard } = this.state;
    const index = shoppingCard.findIndex((item) => item.id === id);
    shoppingCard.splice(index, 1);
    this.setState({ shoppingCard });
  }

  changeQuantity(id, quantity) {
    const { shoppingCard } = this.state;
    const index = shoppingCard.findIndex((item) => item.id === id);
    const itemChanged = shoppingCard[index];
    itemChanged.quantity = quantity;
    shoppingCard.splice(index, 1, itemChanged);
    this.setState({ shoppingCard });

    // const { shoppingCard } = this.state;
    // shoppingCard.map(item => {
    //   if (item.id === id) item.quantity = quantity;
    //   return (true);
    // });
    // this.setState({ shoppingCard: shoppingCard });
    // return
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
              <Home shoppingCard={ shoppingCard } addToCard={ this.addToCard } />
            ) }
          />
          <Route
            exact
            path="/shoppingCart"
            render={ (props) => (
              <ShoppingCart
                { ...props }
                changeQuantity={ this.changeQuantity }
                removeItem={ this.removeItem }
              />
            ) }
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

          <Route exact path="/checkout" component={ Checkout } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
