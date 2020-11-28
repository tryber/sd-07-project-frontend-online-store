import React, { Component } from 'react';

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

export default CategoriesList;
