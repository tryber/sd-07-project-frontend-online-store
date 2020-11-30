import React, { Component } from 'react';
import BuyerInformationForm from '../components/BuyerInformation/BuyerInformationForm';

class PurchaseSummary extends Component {
  render() {
    const products = JSON.parse(localStorage.getItem('cart'));
    const number = 2;
    const totalPrices = products
      .map((product) => product.price)
      .reduce((acc, prices) => acc + prices);
    return (
      <div>
        <h3>Revise seus Produtos</h3>
        {products.map((product) => (
          <div key={ product.id }>
            <p>{ product.title }</p>
            <img src={ product.thumbnail } alt="" />
            <p>{ product.price }</p>
            <p>Qts:1</p>
          </div>
        ))}
        <p>
          Total:
          { totalPrices.toFixed(number) }
        </p>
        <BuyerInformationForm />
      </div>
    );
  }
}

export default PurchaseSummary;
