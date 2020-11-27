import React from 'react';
import CategoryList from '../components/CategoryList';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import ShoppingCartButton from '../components/ShoppingCartButton';
import * as api from '../services/api';

class Home extends React.Component {
  constructor() {
    super();

    this.radioHandler = this.radioHandler.bind(this);
    this.responseGetProducts = this.responseGetProducts.bind(this);
    this.stateActual = this.stateActual.bind(this);
    this.callApi = this.callApi.bind(this);

    this.state = {
      productArray: [],
      categoryArray: [],
      query: '',
      selectedCategoryId: '',
      click: false,
    };
  }

  componentDidMount() {
    this.callApi();
  }

  callApi() {
    this.setState(async () => {
      const fetchResults = await api.getCategories();
      this.setState({ categoryArray: fetchResults });
    });
  }

  radioHandler({ target: { value } }) {
    this.setState({ selectedCategoryId: value }, () => this.responseGetProducts());
  }

  stateActual({ target }) {
    this.setState({ query: target.value });
  }

  async responseGetProducts() {
    const { selectedCategoryId, query } = this.state;
    const resultApiProduct = await api
      .getProductsFromCategoryAndQuery(selectedCategoryId, query);
    const { results } = resultApiProduct;
    this.setState({
      productArray: results,
      click: true,
    });
  }

  render() {
    const { categoryArray, query, productArray, click, selectedCategoryId } = this.state;
    return (
      <div>
        <SearchBar
          responseGetProducts={ this.responseGetProducts }
          stateActual={ this.stateActual }
          query={ query }
        />
        <ShoppingCartButton />
        <CategoryList
          radioHandler={ this.radioHandler }
          categories={ categoryArray }
          selectedCategoryId={ selectedCategoryId }
        />
        <ProductList
          products={ productArray }
          click={ click }
        />
      </div>
    );
  }
}

export default Home;
