import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';


class Details extends Component {
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
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const resp = await api.getProductsFromId(id);
    this.setState({
      loading: false,
      product: resp,
    });
  }

  render() {
    const { loading, product } = this.state;
    if (loading) {
      return <h2>LOADING</h2>;
    }
    return (
      <div>
        <h2 data-testid="product-detail-name">{product.title}</h2>
        <img src={ product.thumbnail } alt="thumb" />
        <p>{product.price}</p>
      </div>
    );
  }
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Details;
