import React from 'react';
import PropTypes from 'prop-types';

class Categoria extends React.Component {
  render() {
    const { category, callback } = this.props;
    return (
      <div>
        <input
          data-testid="category"
          type="radio"
          name="category"
          value={ category.name }
          onChange={ () => callback(category.id) }
        />
        <label htmlFor={ category.name }>{category.name}</label>
        <br />
      </div>
    );
  }
}

export default Categoria;

Categoria.propTypes = {
  category: PropTypes.objectOf(PropTypes.string).isRequired,
  callback: PropTypes.func.isRequired,
};
