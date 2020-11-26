import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading/Loading';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.renderProduct = this.renderProduct.bind(this);
    this.state = {
      isLoading: true,
    };
  }

  renderProduct(product) {
    const { name, price, thumbnail, attributes } = product;
    return (
      <div className="product-details">
        <h2 data-testid="product-detail-name">{`${name} - R$${price}`}</h2>
        <div className="details">
          <img src={ thumbnail } alt="" />
          <ul className="details__specifications">
            {attributes.map((attribute) => (
              <li key={ attribute.id }>
                {`${attribute.name}: ${attribute.value_name}`}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>
        {isLoading ? <Loading /> : this.renderProduct()}
      </div>
    );
  }
}

export default ProductDetails;
