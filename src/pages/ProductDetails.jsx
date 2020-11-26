import React from 'react';
import * as api from '../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super()
    this.apiRequest = this.apiRequest.bind(this);
    this.handleFitered = this.handleFitered.bind(this);
    this.state = {
      item: [],
      itemRecived: {},
    }
  }

  async apiRequest(params) {
    const productList = await api.getItemById(params);
    const resultados = productList.results;
    this.setState({ item: resultados });
    this.handleFitered();
  }

  handleFitered() {
    const { id } = this.props.match.params;
    const { item } = this.state;
    const productRecived = item.filter(produc => produc.id === id);
    this.setState({ itemRecived: productRecived[0] });
  }

  componentDidMount() { 
    const { category } = this.props.match.params
    this.apiRequest(category);
  }

  render() {
    const {id, title} = this.state.itemRecived;
    return (
      <div>
        <h1>Ohhh...{id} {title}</h1>
      </div>
    )
  }
}

export default ProductDetails;