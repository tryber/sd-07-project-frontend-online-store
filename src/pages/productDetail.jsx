import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.fetchProduct = this.fetchProduct.bind(this);
    this.productLoaded = this.productLoaded.bind(this);
    this.state = {
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

  productLoaded() {
    const { product } = this.state;
    const { title, price, thumbnail, attributes } = product;
    return (
      <div>
        <div data-testid="product-detail-name">
          <h4>{ title }</h4>
          <h3>{`R$${price}`}</h3>
          <img alt="product Cover" src={ thumbnail } />
          <ul>
            {attributes.map((a) => (
              <li key={ a.name }>{`${a.name}: ${a.value_name}`}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    return <div>{loading ? <p>Loading</p> : this.productLoaded()}</div>;
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
