import React, { Component } from 'react';
import * as api from '../services/api';

export default class Details extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      product: [],
    };
    this.fetchAPI = this.fetchAPI.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const { id } = this.props.match.params;
    const resp = await api.getProductsFromCategoryAndQuery(id, null);
    this.setState({
      loading: false,
      product: resp.results.find((product) => product.id === id),
    });
  }

  render() {
    const { loading, product } = this.state;
    if (loading) {
      return <h2>LOADING</h2>;
    }
    return (
      <div>
        <h1 data-testid="product-detail-name">{product.title}</h1>
        <img src={ product.thumbnail } alt="asa"></img>
        <p>{product.price}</p>
      </div>
    );
  }
}
