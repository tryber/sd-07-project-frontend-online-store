import React from 'react';
import CategoryItem from './CategoryItem';
import * as api from '../src/services/api';

class CategoriesList extends React.Component {
  constructor() {
    super()

    this.state = {
      categories: [],
    }

    this.fetchCategories = this.fetchCategories.bind(this);
  }

  async fetchCategories() {
    const result = await api.getCategories();
    this.setState( {
      categories: result,
    })
  }

  componentDidMount() {
    this.fetchCategories();
  }
  
  render() {    
    const { categories } = this.state;
    return (
      <div>
        <label >Categorias</label>
        { categories.map((categorie, id) => <CategoryItem key={id} category={categorie} /> ) }
      </div>
    )
  }
}

export default CategoriesList;