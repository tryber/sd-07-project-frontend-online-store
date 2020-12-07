import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CheckoutForm from '../components/CheckoutForm';
import ProductsInCheckoutList from '../components/ProductsInCheckoutList';
import * as cartFunctions from '../services/cartFunctions';

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      shoppingCartitems: cartFunctions.recoveryProductsFromLocalStorage(),
    };
  }

  render() {
    const { shoppingCartitems } = this.state;
    return (
      <div>
        <Link to="/">
          <button type="button">Página Inicial</button>
        </Link>
        <ProductsInCheckoutList shoppingCartitems={ shoppingCartitems } />
        <CheckoutForm />
      </div>
    );
  }
}

export default Checkout;
