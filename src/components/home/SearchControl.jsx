import React from 'react';
import PropTypes from 'prop-types';
import ProductList from './ProductList';

class SearchControl extends React.Component {
  searchControl() {
    const { search, query, answer, num } = this.props;
    if (!search) {
      return (
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      );
    }
    return (
      <ProductList num={ num } query={ query } api={ answer } />
    );
  }

  render() {
    return (
      <div>
        {this.searchControl()}
      </div>
    );
  }
}

SearchControl.propTypes = {
  search: PropTypes.bool.isRequired,
  query: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired,
};

export default SearchControl;
