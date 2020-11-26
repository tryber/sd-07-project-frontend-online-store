import React from 'react';
import Header from '../Components/Header';
import Products from '../Components/Products';
import Categories from '../Components/Categories';
import * as api from '../services/api';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.handlerSelectCategory = this.handlerSelectCategory.bind(this);

    this.state = {
      categories: [],
      products: [],
      input: '',
      selectCategory: '',
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  handlerSubmit(text) {
    this.setState({
      input: text,
    }, () => {
      this.fetchGetProducts();
    });
  }

  handlerSelectCategory(id) {
    this.setState({
      selectCategory: id,
    });
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
      <div>
        <Header handlerSubmit={ this.handlerSubmit } state={ this.state } />
        <Products products={ products } />
        <Categories
          categories={ categories }
          handlerSelectCategory={ this.handlerSelectCategory }
        />
      </div>
    );
  }
}
export default Home;
