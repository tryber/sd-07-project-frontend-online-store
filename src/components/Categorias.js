import React from 'react';
import Categoria from './Categoria';

class Categorias extends React.Component {
  render() {
    const { categorys, callback } = this.props;
    return (
      <div className="categorys">
        {categorys.map((category) => (
          <Categoria key={ category.name } category={ category } callback={ callback } />
        ))}
      </div>
    );
  }
}

export default Categorias;
