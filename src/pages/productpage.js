import React from 'react';
import * as api from '../services/api';

class ProductPage extends React.Component {
  render() {
    const { title } = this.props.location.state;
    return(
      <div>
        <h1 data-testid="product-detail-name">{title}</h1>
      </div>)
    ;
  }
}

export default ProductPage