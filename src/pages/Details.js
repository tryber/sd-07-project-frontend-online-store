import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import addToCart from '../services/addToCart';

class Details extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      product: [],
    };
    this.fetchAPI = this.fetchAPI.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
  }

  addToCart() {
    const { product } = this.state;
    addToCart(product);
  }

  async fetchAPI() {
    const { match } = this.props;
    const { params } = match;
    const { category, searchKey, id } = params;
    const resp = await api.getProductsFromCategoryAndQuery(category, searchKey);
    this.setState({
      loading: false,
      product: resp.results.find((product) => product.id === id),
    });
  }

  render() {
    const { loading, product } = this.state;
    if (loading) {
      return <h2>LOADING</h2>;
    }
    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">
          Carrinho de compras
        </Link>
        <h2 data-testid="product-detail-name">{product.title}</h2>
        <img src={ product.thumbnail } alt="thumb" />
        <p>{product.price}</p>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.addToCart }
        >
          Adicionar ao carrinho
        </button>
        <div className="evaluation">
          <form>
            <label htmlFor="type">
              adicione sua avaliação
              <textarea data-testid="product-detail-evaluation" type="text" id="type" />
            </label>
          </form>
        </div>
      </div>
    );
  }
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      searchKey: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Details;
