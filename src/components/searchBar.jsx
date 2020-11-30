import React from 'react';
import * as api from '../services/api';
import Category from './categoryList';
import NotFound from './notFound';
import ProductCard from './productCard';
// import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      categoryId: '',
      products: [],
      // notFound: true,
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleClickChange = this.handleClickChange.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.filterCategoryAndQuery = this.filterCategoryAndQuery.bind(this);
    this.productListLoaded = this.productListLoaded.bind(this);
  }

  handleSearchChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClickChange(event) {
    event.preventDefault();
    this.filterCategoryAndQuery();
  }

  async handleChangeCategory() {
    await this.filterCategoryAndQuery();
  }

  async filterCategoryAndQuery() {
    const { categoryId, query } = this.state;
    const filterProduct = await api.getProductsFromCategoryAndQuery(categoryId, query);
    this.setState({
      products: filterProduct.results,
      // notFound: false,
    });
  }

  productListLoaded() {
    const { products } = this.state;
    return (
      <div>
        {products.map((product) => (
          <ProductCard key={ product.id } product={ product } />
        ))}
      </div>
    );
  }

  render() {
    const { query, products } = this.state;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="text-input" data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
            <input
              data-testid="query-input"
              id="text-input"
              name="query"
              value={ query }
              onChange={ this.handleSearchChange }
              type="text"
            />
          </label>
          <button
            data-testid="query-button"
            type="submit"
            onClick={ this.handleClickChange }
          >
            Buscar
          </button>
        </form>
        <div>{products.length ? this.productListLoaded() : <NotFound />}</div>
        <Category
          handleSearchChange={ this.handleSearchChange }
          handleChangeCategory={ this.handleChangeCategory }
        />
      </div>
    );
  }
}

// SearchBar.propTypes = {
//   query: PropTypes.string.isRequired,
//   handleSearchChange: PropTypes.func.isRequired,
// };

export default SearchBar;
