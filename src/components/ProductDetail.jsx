import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import * as StorageServices from '../services/storageServices';
import ProductSpecs from './ProductSpecs';
import FormRating from './FormRating';
import Header from './Header';

class ProductDetail extends React.Component {
  constructor() {
    super();
    this.fetchDetails = this.fetchDetails.bind(this);
    this.fetchLocalStorage = this.fetchLocalStorage.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.getStorageItens = this.getStorageItens.bind(this);
    this.getKartItens = this.getKartItens.bind(this);
    this.state = {
      item: {},
      loading: true,
      qttItemsKart: 0,
    };
  }

  componentDidMount() {
    this.fetchDetails();
    this.getKartItens();
  }

  getKartItens() {
    const qttItemsKart = StorageServices.getStorageKartItens();
    this.setState({ qttItemsKart });
  }

  getStorageItens() {
    const itensStorage = StorageServices.getProductsStorage();
    return itensStorage;
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
      const { title, price, thumbnail } = getDetail.results[0];
      let { qtt } = getDetail.results[0];

      const itemOnStorage = await this.getStorageItens();
      if (itemOnStorage !== null) {
        const checkIsExist = itemOnStorage
          .find((productId) => productId.thumbnail === thumbnail);
        if (checkIsExist) qtt = checkIsExist.qtt;
      }

      const elementSet = {
        id: getDetail.results[0].id,
        title,
        price,
        thumbnail,
        qtt,
      };
      this.setState({ item: elementSet, loading: false });
    });
  }

  updateValue(operator) {
    const { item } = this.state;

    if (!item.qtt) item.qtt = 1;

    if (operator === 'sub') {
      const operatorMin = 1;
      if (item.qtt > operatorMin) item.qtt -= 1;
      // this.fetchLocalStorage(item);
      this.setState({ item });
      // this.getKartItens();
    } else {
      item.qtt += 1;
      // this.fetchLocalStorage(item);
      this.setState({ item });
      // this.getKartItens();
    }
  }

  async fetchLocalStorage(item) {
    const { setProductsStorage, updateProductsStorage } = StorageServices;
    await setProductsStorage(item);
    await updateProductsStorage(item);
    await this.getKartItens();
    await this.setState({ item });
  }

  render() {
    const { item, loading, qttItemsKart } = this.state;
    const { id, title, price, thumbnail } = item;
    let { qtt } = item;
    if (!qtt) qtt = 1;
    return (
      <div className="product-details-container">
        <Header qttItemsKart={ qttItemsKart } />
        <div className="product-details">
          {loading ? (
            'Loading...'
          ) : (
            <ProductSpecs title={ title } price={ price } thumbnail={ thumbnail } />
          )}
          <div>
            <button
              type="button"
              data-testid="product-decrease-quantity"
              onClick={ () => this.updateValue('sub') }
            >
              -
            </button>
            <span data-testid="shopping-cart-product-quantity">
              {`Quantidade: ${qtt}`}
            </span>
            <button
              type="button"
              data-testid="product-increase-quantity"
              onClick={ () => this.updateValue('sum') }
            >
              +
            </button>
            <span>{`Preço: ${price}`}</span>
          </div>
          <div>
            <button
              className="add-cart-button"
              data-testid="product-detail-add-to-cart"
              type="submit"
              onClick={ () => this
                .fetchLocalStorage({ id, title, thumbnail, price, qtt }) }
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
