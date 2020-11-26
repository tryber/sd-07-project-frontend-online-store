import React from 'react';
import * as api from '../services/api';


class Details extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product:'',
    }
  }

  async fetchProduct() {
    const { params: { id }} = this.props.match
    console.log(id)
    const request = await api.getProductsFromCategoryAndQuery(id, id)
    console.log(request)
  }
  componentDidMount() {
    this.fetchProduct()
  }
  render() {
    return(
      <div>
        <div data-testid="product-detail-name"></div>
      </div>
    )
  }
}

export default Details;