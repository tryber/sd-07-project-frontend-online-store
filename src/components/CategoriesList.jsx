import React, { Component } from 'react';

class CategoriesList extends Component {
  render() {
    const { categorie } = this.props;
    const { id, name } = categorie;
    return (
      <div data-testid="category">
        <input type="radio" name="category" value={id}></input>
        <label htmlFor={id}>{name}</label>
      </div>
    );
  }
}

export default CategoriesList;
