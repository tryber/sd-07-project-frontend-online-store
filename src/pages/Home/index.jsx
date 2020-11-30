import React from 'react';
import * as api from '../../services/api';
import { CategoryList, SearchPlusCart, ProductList } from '../../components';

class Main extends React.Component {
  constructor(props) {
    super(props);
    const totalQty = sessionStorage.getItem('totalQuantity');

    this.handleSelected = this.handleSelected.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.searchProducts = this.searchProducts.bind(this);
    this.upQuantity = this.upQuantity.bind(this);

    this.state = {
      totalQty,
      inputValue: '',
      products: [],
      selected: 'Mais Categorias',
      selectedId: 'MLB1953',
      requested: false,
    };
  }

  upQuantity() {
    const totalQty = sessionStorage.getItem('totalQuantity');
    this.setState({ totalQty });
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
    return products.map((product) => {
      const { title, id, thumbnail, price, available_quantity: avQt } = product;
      const { shipping: { free_shipping: fs } } = product;
      return (
        <ProductList
          key={ id }
          title={ title }
          image={ thumbnail }
          price={ price }
          id={ id }
          upQty={ this.upQuantity }
          availableQt={ avQt }
          fs={ fs }
        />
      );
    });
  }

  render() {
    const { inputValue, requested, selected: slc, selectedId, totalQty } = this.state;
    return (
      <div>
        <SearchPlusCart
          srchProd={ () => this.searchProducts(inputValue, selectedId) }
          handSrch={ this.handleSearch }
          req={ requested }
          totalQty={ totalQty }
        />
        <CategoryList handleSelected={ this.handleSelected } selected={ slc } />
        { requested && this.productsList() }
      </div>
    );
  }
}

export default Main;
