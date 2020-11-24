import React from 'react';

import * as api from '../services/api';
import Categorias from '../components/Categorias';
import ProductListing from '../components/productListing';

class PageListProducts extends React.Component {
  constructor() {
    super();
    this.fetchCategorys = this.fetchCategorys.bind(this);
    this.state = {
      categorys: [],
      loading: false,
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

  render() {
    return (
      <div className="page-list-products">
        <Categorias categorys={this.state.categorys} />
        <div className="list-products">
          <ProductListing />
        </div>
      </div>
    );
  }
}

export default PageListProducts;
