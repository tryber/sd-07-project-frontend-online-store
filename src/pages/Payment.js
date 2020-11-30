import React from 'react';

import UserInfoForm from '../components/UserInfoForm';
import ListItem from '../components/ListItem';
import * as cartAPI from '../services/localStorageHandler';

class Payment extends React.Component {
  constructor() {
    super();

    this.handleUserInfo = this.handleUserInfo.bind(this);
    this.totalCartPrice = this.totalCartPrice.bind(this);
  }


  handleUserInfo(userInfo) {
    console.log(userInfo);
  }

  totalCartPrice(items) {
    const valorInicial = 0;
    let calcPrice = valorInicial;
    items.forEach((item) => {
      calcPrice += (item.price * item.initialQuantity);
    });
    return calcPrice;
  }

  render() {
    const cartItems = cartAPI.getCartItems();
    console.log(cartItems);
    return (
      <div>
        <h3>Payment</h3>
        <div>
          <h4>Revise seus Produtos</h4>
          { cartItems.map((item) => <ListItem key={ item.id } item={ item } />) }
          <span>{`Total: R$${this.totalCartPrice(cartItems)}`}</span>
        </div>
        <UserInfoForm onSubmit={ this.handleUserInfo } />
      </div>
    );
  }
}

export default Payment;
