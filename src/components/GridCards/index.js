import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import * as api from '../../services/api';

class GridCards extends React.Component {
  constructor(props) {
    super(props);

    this.state = { products: [], alreadySelected: '' };
    this.fetchAPI = this.fetchAPI.bind(this);
  }

  componentDidUpdate() {
    const { alreadySelected } = this.state;
    const { selectedCategory } = this.props;
    if (selectedCategory !== alreadySelected) {
      this.fetchCategory();
    }
  }

  handleSearchTerms({ target }) {
    this.setState({ searchTerms: target.value });
  }

  async fetchAPI(event) {
    event.preventDefault();
    const { selectedCategory } = this.props;
    const { searchTerms } = this.state;
    const category = selectedCategory || '';
    const { results } = await api.getProductsFromCategoryAndQuery(category, searchTerms);
    this.setState({ products: results });
  }

  async fetchCategory() {
    const { selectedCategory } = this.props;
    const { results } = await api.getProductsFromCategoryAndQuery(selectedCategory, '');
    this.setState({ products: results, alreadySelected: selectedCategory });
  }

  render() {
    const { products } = this.state;
    const empty = 0;
    return (
      <div>
        <p data-testid="home-initial-message">
          {products.length === empty && (
            'Digite algum termo de pesquisa ou escolha uma categoria.'
          )}
        </p>
        {products.map((product) => product && (
          <Card key={ product.id } productCards={ product } />
        ))}
      </div>
    );
  }
}

GridCards.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
};

export default GridCards;
