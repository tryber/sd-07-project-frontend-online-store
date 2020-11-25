import React from 'react';
import Card from './Card';

class List extends React.Component {
  render() {
    const { lista } = this.props;
    return(
      <h3 data-testid="home-initial-message">
      Digite algum termo de pesquisa ou escolha uma categoria.
      </h3>
    );
  };
}

export default List;