import React from 'react';
import ProductList from './ProductList';

class SearchControl extends React.Component {

  searchControl() {
    const { search, query, answer, onClick, num } = this.props;
    if (!search) {
      return (
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      );
    }
    return (
      <ProductList num={num} onClick={onClick} query={query} api={answer} />
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

export default SearchControl;
