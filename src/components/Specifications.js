import React, { Component } from 'react';
import Reviews from '../components/Reviews';

import * as cartAPI from '../services/cartAPI';

class Specifications extends Component {
  render() {
    const { product } = this.props;
    const specifications = product.attributes;
    return (
      <div>
        <h6>Especificações Técnicas</h6>
        <ul>
          {specifications.map((item) => (
            <li key={item.name}>
              {' '}
              {item.name} : {item.value_name}{' '}
            </li>
          ))}
        </ul>
        {product.shipping.free_shipping ? (
          <span data-testid="free-shipping">Frete grátis!</span>
        ) : (
          <span />
        )}
      </div>
    );
  }
}

export default Specifications;
