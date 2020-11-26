import React from 'react';
import Header from '../Components/Header';
import Products from '../Components/Products';
import * as api from '../services/api'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.state = {
      categories: [],
      products: [],
      input: '',
    }
  }

  handlerSubmit(text) {
    this.setState({
      input: text,
    }, () => {
      this.fetchGetProducts()
    })
  }

  async fetchGetProducts() {
    const { input, categories } = this.state;
    const products = await api.getProductsFromCategoryAndQuery(categories, input)
    this.setState({
      products,
    })
  }
  render() {
    const { products } = this.state;
    return (
      <div>
        <Header handlerSubmit={this.handlerSubmit} state={this.state} />
        <Products products={products}/>
      </div>
    );
  }
}
export default Home;
