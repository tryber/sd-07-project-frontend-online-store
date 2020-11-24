import React, {Component} from 'react';
import Header from '../components/Header'

export default class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <p data-testid="Seu carrinho está vazio">
            Seu carrinho está vazio.
          </p>
        </div>
      </div>
    )
  }
}