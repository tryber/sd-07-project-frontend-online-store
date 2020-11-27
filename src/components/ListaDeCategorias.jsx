import React from 'react';
import Categoria from './Categoria'

class ListaDeCategorias extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <ul>
        {categories.map((category) =>
          <Categoria
            key={category.name}
            category={category}
          />
        )}
      </ul>
    )
  }
}

export default ListaDeCategorias;
