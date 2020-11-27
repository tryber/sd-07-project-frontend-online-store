import React from 'react';
import BuyerInformation from './checkout/BuyerInformation'
import PaymentMethod from './checkout/PaymentMethod'
import ReviewProducts from './checkout/ReviewProducts'
import * as utils from '../services/utils'

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    }
    this.getProductsFromlocalStorage = this.getProductsFromlocalStorage.bind(this);
  }

  componentWillMount() {
    // localStorage.setItem()
  }

  getProductsFromlocalStorage() {
    const productsFromCart = utils.picksUpItemsFromTheCartInLocalStorage()
    this.setState({
      products: productsFromCart,
    });
  }

  render() {
    // { products } = this.state;
    return (
      <div>
        {{/* <ReviewProducts products={products} /> */}}
        <BuyerInformation />
        <PaymentMethod />
        <button>Comprar</button>
      </div>
    );
  }
}

export default Checkout;
