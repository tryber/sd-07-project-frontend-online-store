import React, { Component } from 'react';
import Proptypes from 'prop-types';

class CategoriesList extends Component {
  render() {
    const { categorie, onCategoryChoice } = this.props;
    const { id, name } = categorie;
    return (
      <div>
        <input
          data-testid="category"
          type="radio"
          name="category"
          value={ id }
          onChange={ onCategoryChoice }
        />
        <label htmlFor={ id }>{ name }</label>
      </div>
    );
  }
}

CategoriesList.propTypes = {
  categorie: Proptypes.shape({
    id: Proptypes.string.isRequired,
    name: Proptypes.string.isRequired,
  }).isRequired,
  onCategoryChoice: Proptypes.func.isRequired,
};

export default CategoriesList;
