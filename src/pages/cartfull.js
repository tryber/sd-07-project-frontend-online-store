import React from 'react';
import '../App.css';

class Cartfull extends React.Component {
  constructor() {
    super();

    this.state = {
      title: ' ',
      thumbnail: ' ',
      price: 0,
    };
  }

  render() {
    const { title, thumbnail, price } = this.state;
    const totalPrice = 0;
    const quantity = 0;
    console.log(this.props);
    return (
      <div>
        <ul>
          <li>
            <span>{ thumbnail }</span>
            <span data-testid="shopping-cart-product-name">{ title }</span>
            <span data-testid="shopping-cart-product-quantity">{ quantity }</span>
            <span>{ price }</span>
          </li>
          <li>
            { totalPrice }
          </li>
        </ul>
      </div>
    );
  }
}

export default Cartfull;
