import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <input data-testid="query-input" type="text" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <button data-testid="query-button">Buscar</button>
      </div>
    );
  }
}

export default SearchBar;
