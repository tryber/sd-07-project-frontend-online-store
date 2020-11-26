import React from 'react';
import * as api from '../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super()

    this.fetchQueryAndCategoryId = this.fetchQueryAndCategoryId.bind(this);

    this.state = {

    }
  }

  async fetchQueryAndCategoryId() {
    const { id } = match.params
    const response = await api.getProductsFromCategoryAndQuery()
  }

  componentDidMount() {
    this.fetchQueryAndCategoryId()
  }

  render() {
    return (
      <div>
        <h1>oi</h1>
      </div>
    )
  }
}

export default ProductDetails;