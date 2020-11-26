import React, { Component } from 'react';

import * as cartAPI from '../services/cartAPI';

class ProductDetail extends Component {
  render() {
    const product = this.props.location.state.test;
    const specifications = product.attributes;
    return (
      <div>
        <h3 data-testid="product-detail-name">
          {' '}
          {product.title} - R$ {product.price}{' '}
        </h3>
        <div>
          <img src={product.thumbnail} />
        </div>
        <div>
          <h6>Especificações Técnicas</h6>
          <ul>
            {specifications.map((item) => (
              <li>
                {' '}
                {item.name} : {item.value_name}{' '}
              </li>
            ))}
          </ul>
        </div>
        <button
          data-testid="product-detail-add-to-cart"
          onClick={() => cartAPI.addItem(product)}
        >
          Me adicione ao carrinho :)
        </button>
      </div>
    );
  }
}

export default ProductDetail;
