import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.fetchProduct = this.fetchProduct.bind(this);
    this.state = {
      product: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchProduct();
  }

  async fetchProduct() {
    const { id } = this.props.match.params;
    const RequestReturn = await api.getProduct(id);
    this.setState({
      product: RequestReturn,
      loading: false,
    });
  }

  render() {
    const { loading } = this.state;
    const { title, price, thumbnail, attributes } = this.state.product;
    console.log(attributes);
    return (
      <div data-testid="product-detail-name">
        {loading ? (
          <div></div>
        ) : (
          <div>
            <h4>{`PRODUTO ${title} - R$${price}`}</h4>
            <img alt="product Cover" src={thumbnail} />
            <ul>
              {attributes.map((attribute) => (
                <li>
                  {attribute.name}: {attribute.value_name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default ProductDetail;
