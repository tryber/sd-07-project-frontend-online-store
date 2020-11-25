import React from 'react';
import * as api from '../services/api';

class Productlist extends React.Component {
  constructor(props) {
    super(props);
    this.fetchProducts = this.fetchProducts.bind(this);
    this.state = {
      products: [],
    }
  }

  componentDidUpdate() {
    const { term } = this.props
    return this.fetchProducts(term);
  }

  async fetchProducts(term) {
    const filteredProducts = await api.getProductsFromQuery(term);
    console.log(filteredProducts);
    const results = filteredProducts.results;
    this.setState({ products: results });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
      </div>
    )
  }
}

export default Productlist;
