import React from 'react';
import PropTypes from 'prop-types';

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
      selectedCategory: '',
    };
  }

  componentDidMount() {
    this.fetchCategorys();
  }

  async fetchCategorys() {
    const categorysReturn = await api.getCategories();
    this.setState({
      categorys: categorysReturn,
    });
  }

  categoryUpdate(categoryId) {
    this.setState({ selectedCategory: categoryId });
  }

  render() {
    const { categorys, selectedCategory } = this.state;
    const { updateCartAmount } = this.props;
    return (
      <div className="page-list-products">
        <Categorias categorys={ categorys } callback={ this.categoryUpdate } />
        <div className="list-products">
          <ProductListing
            categoryId={ selectedCategory }
            updateCartAmount={ updateCartAmount }
          />
        </div>
      </div>
    );
  }
}

export default PageListProducts;

PageListProducts.propTypes = {
  updateCartAmount: PropTypes.func.isRequired,
};
