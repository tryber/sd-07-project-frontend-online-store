import React from 'react';
import Header from '../Components/Header';
import Products from '../Components/Products';
import * as api from '../services/api'

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      input: '',
    }
  }

  componentDidMount() {
    this.fetchGetProducts();
  }

  async fetchGetProducts() {
    const products = await api.getProductsFromCategoryAndQuery()
  }
  render() {
    return (
      <div>
        <Header />
        <Products />
      </div>
    );
  }
}
export default Home;
