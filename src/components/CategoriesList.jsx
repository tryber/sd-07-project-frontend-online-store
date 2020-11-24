import React, { Component } from 'react';
import CategorieItem from './CategorieItem';

class CategoriesList extends Component {
  render() {
    const { categories } = this.props;
    return (
      <ul>
        {categories.map((categorie) => <CategorieItem key={categorie.id} categorie={categorie.name} />)}
      </ul>
    );
  }
}

export default CategoriesList;
