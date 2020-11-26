import React from 'react';
import * as api from '../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super()
    this.apiRequest = this.apiRequest.bind(this);
    this.state = {
      item: {},
    }
  }
  componentDidMount() { 
    const param = this.props.match.params.title
    this.apiRequest(param);
  }
  async apiRequest(params) {
    const productList = await api.getProductsFromCategoryAndQuery('', params) 
    this.setState({ item: productList });
  }
  render() {
    return (
    <h1>Teste</h1>
    )
  }
}

export default ProductDetails;