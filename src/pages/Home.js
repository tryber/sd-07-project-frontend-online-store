import React from 'react';

import * as api from '../services/api';
import Categorias from '../components/Categorias';
import ProductListing from '../components/productListing';

class PageListProducts extends React.Component {
  constructor() {
    super();
    this.fetchCategorys = this.fetchCategorys.bind(this);
    this.categoryUpdate = this.categoryUpdate.bind(this);
    this.state = {
      categorys: [],
      products: [],
      loading: false,
      searchText: '',
      selectedCategory: ''
    };
  }

  componentDidMount() {
    this.fetchCategorys();
  }

  async fetchCategorys() {
    this.setState({ loading: true }, async () => {
      const categorysReturn = await api.getCategories();
      this.setState({
        categorys: categorysReturn,
        loading: false,
      });
    });
  }

  categoryUpdate(categoryId) {
    console.log('categoria foi atualizada com '+categoryId);
    this.setState({selectedCategory:categoryId})
    const { categorys, selectedCategory } = this.state;
  }

  render() {
    return (
      <div className="page-list-products">
       <Categorias categorys={ categorys } callback={ this.categoryUpdate } />
        <div className="list-products">
          <ProductListing 
           categoryId={ selectedCategory }
          />
        </div>
      </div>
    );
  }
}

export default PageListProducts;
