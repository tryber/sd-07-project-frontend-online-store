import React from 'react';
import PropTypes from 'prop-types';
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
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const RequestReturn = await api.getProduct(id);
    this.setState({
      product: RequestReturn,
      loading: false,
    });
  }

  render() {
    const { loading, product } = this.state;
    const { title, price, thumbnail, attributes } = product;
    return (
      <div>
        {loading ? (
          <p>Loading</p>
        ) : (
          <div data-testid="product-detail-name">
            <h4>{`PRODUTO ${title} - R$${price}`}</h4>
            <img alt="product Cover" src={ thumbnail } />
            <ul>
              {attributes.map((a) => (
                <li key={ a.name }>{`${a.name}: ${a.value_name}`}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.object.isRequired,
  }).isRequired,
};

export default ProductDetail;
