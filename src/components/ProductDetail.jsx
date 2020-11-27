import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import * as StorageServices from '../services/storageServices';
import ProductSpecs from './ProductSpecs';
import FormRating from './FormRating';

class ProductDetail extends React.Component {
  constructor() {
    super();
    this.fetchDetails = this.fetchDetails.bind(this);
    this.fetchLocalStorage = this.fetchLocalStorage.bind(this);
    this.state = {
      dataDetail: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchDetails();
  }

  async fetchDetails() {
    this.setState({ loading: true }, async () => {
      const {
        match: {
          params: { id },
        },
      } = this.props;

      const indexOne = 0;
      const indexTwo = 8;
      const name = id.substring(indexOne, indexTwo);
      const getDetail = await api.getProductsFromCategoryAndQuery('', name);
      this.setState({
        dataDetail: getDetail.results[0],
        loading: false,
      });
    });
  }

  async fetchLocalStorage(item) {
    await StorageServices.setProductsStorage(item);
  }

  render() {
    const { dataDetail, loading } = this.state;
    const { id, title, price, thumbnail } = dataDetail;
    // const productToKart = { id, title, price, qtt: 1 }

    return (
      <div>
        <div>
          {loading ? (
            'Loading...'
          ) : (
            <ProductSpecs title={ title } price={ price } thumbnail={ thumbnail } />
          )}
          <div data-testid="product-detail-add-to-cart">
            <button
              data-testid="shopping-cart-button"
              type="submit"
              onClick={ () => this
                .fetchLocalStorage({ title, thumbnail, price, id, qtt: 1 }) }
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
        <FormRating />
      </div>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
export default ProductDetail;
