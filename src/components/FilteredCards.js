import React, { Component } from 'react';

class FilteredCards extends Component {
  render() {
    return (
      <div>
        <ul data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </ul>
      </div>
    );
  }
}

export default FilteredCards;
