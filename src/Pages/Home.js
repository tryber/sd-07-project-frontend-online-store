import React from 'react';
import Header from '../Components/Header';
import Products from '../Components/Products';
import Categories from '../Components/Categories';
import * as api from '../services/api';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handlerSearch = this.handlerSearch.bind(this);
    this.handlerSelectCategory = this.handlerSelectCategory.bind(this);

    this.state = {
      categories: [],
      products: [],
      input: undefined,
      selectCategory: '',
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  handlerSearch(text) {
    this.setState({
      input: text,
    }, () => {
      this.fetchGetProducts();
    });
  }

  handlerSelectCategory(id) {
    this.setState({
      selectCategory: id,
    }, () => this.fetchGetProducts());
  }

  async fetchCategories() {
    const categories = await api.getCategories();
    this.setState({
      categories,
    });
  }

  async fetchGetProducts() {
    const { input, selectCategory } = this.state;
    const products = await api.getProductsFromCategoryAndQuery(selectCategory, input);
    this.setState({
      products,
    });
  }

  render() {
    const { products, categories } = this.state;
    return (
      <div className="home">
        <Header handlerSearch={ this.handlerSearch } state={ this.state } />
        <div className="main-content">
          <Categories
            categories={ categories }
            handlerSelectCategory={ this.handlerSelectCategory }
          />
          <Products products={ products } />
        </div>
      </div>
    );
  }
}
export default Home;
