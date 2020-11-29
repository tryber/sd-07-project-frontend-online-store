import React from 'react';
import PropTypes from 'prop-types';

import {
  ProducEmpty,
  ProductsContainer,
  ProductsContent,
} from './styles';

import Card from '../Card';
import { getProductsFromCategoryAndQuery } from '../../services/api';
import Categories from '../Categories';

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = { products: [], currentIdCategory: '', currentWorldSearch: '' };
    this.fetchAPI = this.fetchAPI.bind(this);
  }

  componentDidUpdate() {
    const { category, query } = this.props;
    const { currentIdCategory, currentWorldSearch } = this.state;
    const byCategory = category !== '' && category !== currentIdCategory;
    const byWorldSearch = query !== '' && query !== currentWorldSearch;
    if (byCategory || byWorldSearch) this.updateState(category, query);
  }

  updateState(category, query) {
    this.setState({
      currentIdCategory: category,
      currentWorldSearch: query,
    });
    this.fetchAPI();
  }

  async fetchAPI() {
    const { category, query } = this.props;
    const { results } = await getProductsFromCategoryAndQuery(category, query);
    this.setState({ products: results });
  }

  render() {
    const { category, query } = this.props;
    const { products } = this.state;
    const productsEmpty = products.length;
    return (
      <ProductsContainer>
        <ProductsContent>
          {!productsEmpty && (
            <ProducEmpty data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </ProducEmpty>
          )}

          {products.map((product) => (
            <Card
              key={ product.id }
              product={ product }
              category={ category }
              query={ query }
            />
          ))}
        </ProductsContent>
      </ProductsContainer>
    );
  }
}

Categories.propTypes = {
  category: PropTypes.string,
  query: PropTypes.string,
};

Categories.defaultProps = {
  category: '',
  query: '',
}

export default Products;
