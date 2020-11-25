import React, { Component } from 'react';

export default class Product extends Component {
  render() {
    const { title, thumbnail, price } = this.props;
    return (
      <div>
        <h2>{title}</h2>
        <img src={thumbnail} alt="thumb" />
        <p>{price}</p>
      </div>
    );
  }
}
