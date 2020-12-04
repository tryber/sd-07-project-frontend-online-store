import React from 'react';
import PropTypes from 'prop-types';

import { getProductsFromCategoryAndQuery } from '../../services/api';

import ProductItem from '../ProductItem';

import {
  ProductsContainer,
  ProductsContent,
} from './styles';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: false,
      products: JSON.parse(localStorage.getItem('products')) || [],
      currency: {},
    };
  }

  async componentDidMount() {
    await this.setup();
    await this.verifyExistSearch();
  }

  async componentDidUpdate() {
    const { match } = this.props;
    const { category, query } = match.params;
    const { currency } = this.state;
    if (currency.category !== category || currency.query !== query) {
      await this.setup();
    }
  }

  async setup() {
    await this.initSearch();
  }

  async initSearch() {
    const { match } = this.props;
    const { category, query } = match.params;
    await this.setState({ currency: { category, query } });
    if (
      (category !== '0' && category !== undefined)
      || (query !== '0' && query !== undefined)
    ) {
      await this.fetchGetProducts();
    }
  }

  async fetchGetProducts() {
    const { currency: { category, query } } = this.state;
    const { results } = await getProductsFromCategoryAndQuery(category, query);
    localStorage.setItem('products', JSON.stringify(results));
    this.setState({ products: results, search: true });
  }

  async verifyExistSearch() {
    const empty = 0;
    const { products } = this.state;
    const lengthProducts = products.length;
    if (lengthProducts !== empty) {
      await this.setState({ search: true });
    }
  }

  render() {
    const { search, products } = this.state;
    const { updateQuantity } = this.props;

    if (!search) {
      return (
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
      );
    }

    return (
      <ProductsContainer>
        <ProductsContent>
          {products.map((product) => (
            <ProductItem
              key={ product.id }
              product={ product }
              updateQuantity={ updateQuantity }
            />
          ))}
        </ProductsContent>
      </ProductsContainer>
    );
  }
}

Products.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      category: PropTypes.string,
      query: PropTypes.string,
    }),
  }),
  updateQuantity: PropTypes.func.isRequired,
};

Products.defaultProps = {
  match: {
    params: {
      category: '0',
      query: '0',
    },
  },
};

export default Products;
