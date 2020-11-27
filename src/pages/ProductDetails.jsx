import React, { Component } from 'react';
import * as api from '../services/api';
import Loading from '../components/Loading/Loading';
import AddByDetails from '../components/AddByDetails/AddByDetails';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.renderDetails = this.renderDetails.bind(this);
    this.fetchProduct = this.fetchProduct.bind(this);
    this.state = {
      isLoading: true,
      productSelected: {},
    };
  }

  componentDidMount() {
    const { category_id, id } = this.props.match.params;
    this.fetchProduct(category_id, id);
  }

  fetchProduct(category, id) {
    this.setState({ isLoading: true }, () => {
      api.getProductsFromCategoryAndQuery(category, '')
        .then((obj) => {
          const product = obj.results.find((item) => item.id === id);
          this.setState({
            isLoading: false,
            productSelected: product,
          });
        });
    });
  }

  renderDetails(product) {
    const { title, price, thumbnail, attributes } = product;
    return (
      <div className="product-details">
        <h2 data-testid="product-detail-name">{`${title} - R$${price}`}</h2>
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
        <AddByDetails product={ product } />
      </div>
    );
  }

  render() {
    const { isLoading, productSelected } = this.state;
    return (
      <div>
        {isLoading ? <Loading /> : this.renderDetails(productSelected)}
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      category_id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
