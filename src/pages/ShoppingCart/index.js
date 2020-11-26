import React, { Component } from 'react';
import { getCartList } from '../../services/cartApi';
import CartItem from '../../components/CartItem';

class ShoppingCart extends Component {
  constructor() {
    super();

    this.handleStateUpdate = this.handleStateUpdate.bind(this);
    this.state = {
      cartItens: [],
    };
  }

  componentDidMount() {
    const storageList = getCartList();
    this.handleStateUpdate(storageList);
  }

  handleStateUpdate(storageList) {
    this.setState({
      cartItens: storageList,
    });
  }

  render() {
    const { cartItens } = this.state;

    if (!cartItens.length) {
      return (
        <div>
          <h4 data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio.
          </h4>
        </div>
      );
    }


    return (
      <div>
        { cartItens.map((item) => <CartItem key={ item.id } data={ item } />) }
      </div>
    );
  }
}

export default ShoppingCart;
