import React, { Component } from 'react';
import CheckoutCard from './CheckoutCard';
import * as cartFunctions from '../services/cartFunctions';

class ProductsInCheckoutList extends Component {
  constructor() {
    super();
    const initialNumber = 0;
    this.state = {
      shoppingCartItems: cartFunctions.recoveryProductsFromLocalStorage(),
      totalPrice: cartFunctions
        .recoveryProductsFromLocalStorage()
        .reduce((totalPrice, product) => totalPrice + product.price, initialNumber),
    };
  }

  render() {
    const { shoppingCartItems, totalPrice } = this.state;
    const numberOfHouses = 2;
    return (
      <section>
        <h3>Revise seus produtos</h3>
        <div>
          {shoppingCartItems.map((product) => (
            <CheckoutCard
              key={ product.id }
              id={ product.id }
              title={ product.title }
              price={ product.price }
              image={ product.thumbnail }
            />
          ))}
        </div>
        <p>{`Total: R$ ${totalPrice.toFixed(numberOfHouses)}`}</p>
      </section>
    );
  }
}

export default ProductsInCheckoutList;
