import React from 'react';
import PayProductReview from './PayProductReview';
import BuyerInfo from './BuyerInfo';
import * as StorageServices from '../services/storageServices';

class PayProductList extends React.Component {
  constructor() {
    super();
    this.fetchLocalStorage = this.fetchLocalStorage.bind(this);
    this.state = {
      kartProducts: [],
    };
  }

  componentDidMount() {
    this.fetchLocalStorage();
  }

  async fetchLocalStorage(item) {
    const getProductsKart = await StorageServices.getProductsStorage(item);
    this.setState({ kartProducts: getProductsKart });
  }

  render() {
    const { kartProducts } = this.state;
    return (
      <div>
        <PayProductReview kartProducts={ kartProducts } />
        <BuyerInfo />
      </div>
    );
  }
}
export default PayProductList;
