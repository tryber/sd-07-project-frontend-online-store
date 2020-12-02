import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import AddAndRemove from '../components/Add-n-remove';
import * as cartFunctions from '../services/cartFunctions';


class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      shoppingCartItems: cartFunctions.recoveryProductsFromLocalStorage(),
    };
  }

  render() {
    const { shoppingCartItems } = this.state;

    if (shoppingCartItems[0]) {
      return (
        <section>
          <div><h2>Carrinho de compras</h2></div>
          <div>
            <Link to="/">
              <button type="button">
                Página inicial
              </button>
            </Link>
          </div>
          <div>
            <Link to="./Checkout">
              <button type="button">
                Finalizar Compra
              </button>
            </Link>
          </div>
          {shoppingCartItems.map((product) => (
            <AddAndRemove
              key={ product.id }
              id={ product.id }
              title={ product.title }
              price={ product.price }
              image={ product.thumbnail }
            />
          ))}
          ;
          <Footer />
        </section>
      );
    }
    return (
      <div>
        <Link to="/">
          <button type="button">
            Página inicial
          </button>
        </Link>
        <div><h2>Carrinho de compras</h2></div>
        <ul>
          <h3 data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </h3>
        </ul>
        <Footer />
        <Link to="./Checkout">
          <button type="button">
            Finalizar Compra
          </button>
        </Link>
      </div>
    );
  }
}

export default ShoppingCart;
