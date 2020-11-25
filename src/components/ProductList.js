import React, { Component } from 'react';
import Product from './Product';

export default class ProductList extends Component {
  render() {
    const { results } = this.props;
    return (
      <div>
        {results.map(({ title, thumbnail, price, id }) => (
          <Product title={title} thumbnail={thumbnail} price={price} key={id} />
        ))}
      </div>
    );
  }
}
