import React from 'react';
import Categoria from './Categoria';

class Categorias extends React.Component {
  render() {
    const allCategorys = this.props.categorys;
    return (
      <div className="categorys">
        {allCategorys.map((category) => (
          <Categoria key={category.name} category={category} />
        ))}
      </div>
    );
  }
}

export default Categorias;
