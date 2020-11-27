import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListCardsProduts from './ListCardsProduts';

import * as API from '../services/api';

class CategoryListCards extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    const productsPerCategory = async (id) => {
      const products = await API.getProductsFromCategory(id);
      this.setState({ products });
    };
    const { match: { params: { id } } } = this.props;
    productsPerCategory(id);
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        {
          products.map((product) => (<ListCardsProduts
            key={ product.id }
            product={ product }
          />))
        }
      </div>
    );
  }
}

CategoryListCards.propTypes = {
  match: PropTypes.string.isRequired,
};

export default CategoryListCards;
