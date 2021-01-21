import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductsList from './Home';
import Cart from './pages/cart';
import Cartfull from './pages/cartfull';
import ProductDetails from './pages/productdetails';
import './App.css';
import Checkout from './pages/checkout';

class App extends Component {
  constructor() {
    super();
    this.state = {
      productsCart: [],
    };
    this.addToCart = this.addToCart.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.searchIndex = this.searchIndex.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
  }

  searchIndex(id) {
    const { productsCart } = this.state;
    const index = productsCart.findIndex((obj) => obj.id === id);
    return index;
  }


  updateQuantity(id, value) {
    const minQunatity = 0;
    const minValue = -1;
    const { productsCart } = this.state;
    const copyProductsCart = productsCart;
    const indexProduct = this.searchIndex(id);
    const product = productsCart[indexProduct];

    if (product.quantity >= minQunatity) {
      if (product.quantity === minQunatity && value === minValue) return false;
      product.quantity += value;
      copyProductsCart.slice(indexProduct, 1, product);
      this.setState({
        productsCart: copyProductsCart,
      });
    }
  }

  removeProduct(id) {
    const { productsCart } = this.state;
    const indexProductRemove = this.searchIndex(id);
    const newsProducts = [...productsCart];
    newsProducts.splice(indexProductRemove, 1);
    this.setState({
      productsCart: newsProducts,
    });
  }

  addToCart(product) {
    const addProducts = {
      id: product.id,
      title: product.title,
      quantity: 1,
      price: product.price,
      thumbnail: product.thumbnail,
      availableQuantity: product.available_quantity,
    };
    this.setState((prevState) => ({
      productsCart: [...prevState.productsCart, addProducts],
    }));
  }

  render() {
    const { productsCart } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (
              <ProductsList productsCart={ productsCart } addToCart={ this.addToCart } />
            ) }
          />
          <Route exact path="/pages/cart" component={ Cart } />
          <Route
            exact
            path="/pages/cartfull"
            render={ () => (
              <Cartfull
                productsCart={ productsCart }
                updateQuantity={ this.updateQuantity }
                removeProduct={ this.removeProduct }
              />
            ) }
          />
          <Route
            exact
            path="/pages/productdetails/:Id"
            render={ (props) => <ProductDetails { ...props } /> }
          />
          <Route exact path="/pages/checkout" component={ Checkout } />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
