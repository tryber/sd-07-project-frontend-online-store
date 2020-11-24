import React, { Component } from 'react';

class CategorieItem extends Component {
  render() {
    const { categorie } = this.props;
    return (
    <li data-testid="category">{categorie}</li>
    );
  }
}

export default CategorieItem;
