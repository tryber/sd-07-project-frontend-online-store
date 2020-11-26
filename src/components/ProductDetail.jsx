import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import * as StorageServices from '../services/storageServices';

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
      const name = id.substring(0, 8);
      console.log(name);
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
        {loading ? (
          'Loading...'
        ) : (
          <div>
            <h3 data-testid="product-detail-name">{`${title} - R$ ${price}`}</h3>
            <img src={ thumbnail } alt="Imagem do produto" />
            <div>
              <ul>
                <li>Especificação 01</li>
                <li>Especificação 02</li>
                <li>Especificação 03</li>
                <li>Especificação 04</li>
                <li>Especificação 05</li>
                <li>Especificação 06</li>
                <li>Especificação 07</li>
              </ul>
            </div>
          </div>
        )}
        <div data-testid="product-detail-add-to-cart">
          <button
            data-testid="shopping-cart-button"
            type="submit"
            onClick={
              () => this.fetchLocalStorage({ title, thumbnail, price, id, qtt: 1 })
            }
          >
            Adicionar ao Carrinho
          </button>
        </div>
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
