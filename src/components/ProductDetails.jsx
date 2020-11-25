import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    const { id } = props.match.params;

    this.fetch = this.fetch.bind(this);

    this.state = {
      productId: id.substring(0, id.indexOf('&')),
      filterId: id.substring(id.indexOf('&') + 1, id.length),
      product: undefined,
      loading: true,
    };
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    const { filterId, productId } = this.state;

    this.setState(
      {
        loading: true,
      },
      () => {
        api
          .getProductsFromCategoryAndQuery(filterId, undefined)
          .then((response) => {
            this.setState({
              loading: false,
              product: response.results.find(
                (element) => element.id === productId,
              ),
            });
          });
      },
    );
  }

  render() {
    const { product, loading } = this.state;

    if (loading) return <div>Carregando...</div>;

    return (
      <div>
        <p data-testid="product-detail-name">{product.title}</p>
        <img src={ product.thumbnail } alt="" />
        <p>
          R$
          {product.price}
        </p>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  params: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
  id: PropTypes.string.isRequired,
};

export default ProductDetails;
