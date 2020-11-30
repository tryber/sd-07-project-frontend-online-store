import React from 'react';
import CategorieFilter from '../components/CategorieFilter';
import * as api from '../services/api';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import ShoppingCartButton from '../components/ShoppingCartButton';
import EmptyProductList from '../components/EmptyProductList';
export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      products: [],
      categoryId: '',
      isEmpty: true,
    };
    this.findProduct = this.findProduct.bind(this);
    this.updateValue = this.updateValue.bind(this);

    this.updateValueCategory = this.updateValueCategory.bind(this);
  }

  async findProduct() {
    const { categoryId, searchText } = this.state;
    const products = await api.getProductsFromCategoryAndQuery(
      categoryId,
      searchText,
    );
    this.setState({
      products: products.results,
      isEmpty: false,
    });
  }
  async updateValueCategory(event) {
    const { value } = await event.target;
    this.setState({ categoryId: value });
    this.findProduct();
  }
  updateValue(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  render() {
    const { searchText, products, isEmpty } = this.state;
    return (
      <div className="main-content">
        <div>
          <CategorieFilter updateValueCategory={ this.updateValueCategory } />
        </div>
        <div className="search-bar-content">
          <div>
            <SearchBar
              searchText={searchText}
              onChange={this.updateValue}
              onClick={this.findProduct}
            />
          </div>
          <div>
            <ShoppingCartButton />
          </div>
        </div>
        <div>
          {isEmpty ? <EmptyProductList /> : <ProductList products={products} />}
        </div>
      </div>
    );
  }
}
