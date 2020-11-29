import React from 'react';
import PropTypes from 'prop-types';
import Categoria from './Categoria';

class ListaDeCategorias extends React.Component {
  
  render() {
    const { categories, handleClickCategories } = this.props;
    return (
      <ul>
        {
          categories.map((category) => (<Categoria
            key={ category.name }
            name={ category.name }
            id={ category.id }
            functionHandleClick={ handleClickCategories }
          />))
        }
      </ul>
    );
  }
}

export default ListaDeCategorias;

ListaDeCategorias.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};
