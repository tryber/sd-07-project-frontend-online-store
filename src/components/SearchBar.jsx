import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <label>
          <input type="text" />
        </label>
        <h3 data-testid="home-initial-message" >Digite algum termo de pesquisa ou escolha uma categoria.</h3>
      </div>
    );
  };
}

export default SearchBar;