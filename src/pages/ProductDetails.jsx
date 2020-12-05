import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import ProductDetailsEvaluation from '../components/ProductDetailsEvaluation';
import TopBar from '../components/TopBar';
import Loading from '../components/Loading';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.addToLocalStorage = this.addToLocalStorage.bind(this);
    this.readLocalStorage = this.readLocalStorage.bind(this);
    this.fetchProduct = this.fetchProduct.bind(this);

    this.state = {
      loading: true,
      product: {},
    };
  }

  componentDidMount() {
    this.fetchProduct();
  }

  fetchProduct() {
    this.setState({
      loading: true,
    },
    async () => {
      const { match } = this.props;
      const { params } = match;
      const { categoryId, search, id } = params;
      const response = await api.getProductsFromCategoryAndQuery(categoryId, search);
      // console.log(response.results)
      const result = response.results.find((item) => item.id === id);
      // console.log(result);
      this.setState({
        loading: false,
        product: result,
      });
    });
  }

  readLocalStorage() {
    return JSON.parse(localStorage.getItem('cartItems'));
  }

  addToLocalStorage() {
    const { product } = this.state;
    const cartItems = this.readLocalStorage();
    const addItem = [...cartItems, product];
    localStorage.setItem('cartItems', JSON.stringify(addItem));
    // console.log(this.readLocalStorage());
  }

  render() {
    const { loading, product } = this.state;
    const { thumbnail, title, price } = product;

    if (loading) return <Loading />;

    return (
      <div className="page-container">
        <div className="page-sub-container">
          <TopBar />
          <div className="product-card">
            <img alt="Imagem do produto" src={ thumbnail } />
            <div>
              <h2 data-testid="product-detail-name">{ title }</h2>
              <p>{ `R$ ${price}` }</p>
              <button
                className="add-to-cart-button"
                type="button"
                data-testid="product-detail-add-to-cart"
                onClick={ this.addToLocalStorage }
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>
          <ProductDetailsEvaluation />
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      categoryId: PropTypes.string.isRequired,
      search: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
