import React, { Component } from 'react';
import Reviews from '../components/Reviews';

import * as cartAPI from '../services/cartAPI';

class ProductDetail extends Component {
  constructor(props) {
    super()
    this.state = {
      product: props.location.state.product,
    }
  }

  render() {

    const { product } = this.state;
    console.log(product)
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
        <Reviews />
      </div>
    );
  }
}

export default ProductDetail;
