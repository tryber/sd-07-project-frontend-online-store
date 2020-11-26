import React from 'react';

import CategoryList from './CategoryList';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        Barra de busca
        <CategoryList />
      </div>
    );
  }
}

export default SearchBar;
