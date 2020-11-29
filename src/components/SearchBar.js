import React, { Component } from 'react';
import ProductCard from './ProductCard';
import '../App.css';

class SearchBar extends Component {
  render() {
    const { handleSubmit, handleTextInput } = this.props;
    const { itemsFindOut, loading } = this.props.parentState;
    return (
      <main>
        <div className="item-inputsearch">
          <input
            data-testid="query-input"
            type="text"
            name="input-text"
            id="input-text"
            onChange={ handleTextInput }
          />
          <hr />
          <label
            htmlFor="input-text"
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </label>
          <button
            id="input-text"
            data-testid="query-button"
            type="button"
            onClick={ handleSubmit }
          >
            Pesquisar
          </button>
        </div>
        <div className="grid">
          <div className="item">
            {loading ? itemsFindOut.results.map((item) => {
              const { id } = item;
              return <ProductCard key={ id } item={ item } />;
            }) : ''}
          </div>
        </div>
      </main>
    );
  }
}

export default SearchBar;
