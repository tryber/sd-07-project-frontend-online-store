import React from 'react';
import * as api from '../../services/api';
import { CategoryList, SearchPlusCart, ProductList } from '../../components';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.handleSelected = this.handleSelected.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.searchProducts = this.searchProducts.bind(this);

    this.state = {
      inputValue: '',
      products: [],
      selected: 'Mais Categorias',
      selectedId: 'MLB1953',
      requested: false,
    };
  }

  handleSearch({ target: { value } }) {
    this.setState({ inputValue: value });
  }

  handleSelected({ target: { value, id } }) {
    const { inputValue } = this.state;
    this.setState({ selected: value, selectedId: id });
    this.searchProducts(inputValue, id);
  }

  async searchProducts(query, category) {
    const response = await api.getProductsFromCategoryAndQuery(category, query);
    const products = response.results;
    return this.setState({ products, requested: true });
  }

  productsList() {
    const { products } = this.state;
    return products.map(({ title, id, thumbnail, price }) => (
      <ProductList
        key={ id }
        title={ title }
        image={ thumbnail }
        price={ price }
        id={ id }
      />
    ));
  }

  render() {
    const { inputValue, requested, selected: slc, selectedId } = this.state;
    return (
      <div>
        <SearchPlusCart
          srchProd={ () => this.searchProducts(inputValue, selectedId) }
          handSrch={ this.handleSearch }
          req={ requested }
        />
        <CategoryList handleSelected={ this.handleSelected } selected={ slc } />
        { requested && this.productsList() }
      </div>
    );
  }
}

export default Main;
