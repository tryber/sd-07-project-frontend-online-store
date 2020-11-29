import React from 'react';

class IncreaseAndDecrease extends React.Component {
  constructor() {
    super();

    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
  }

  changeQuantity(event, operationSign) {
    const itemName = event.target.value;
    const localStorageArray = JSON.parse(localStorage.getItem('products'));
    const findInLS = localStorageArray
      .find((productArray) => productArray.title === itemName);
    findInLS.quantity parseInt({operationSign})= 1;
    localStorage.setItem('products', JSON.stringify(localStorageArray));
    return findInLS;
  }

  render() {
    return this.changeQuantity;
  }
}

export default IncreaseAndDecrease;
