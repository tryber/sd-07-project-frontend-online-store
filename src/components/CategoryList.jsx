import React from 'react';
import CategoryItem from './CategoryItem';
import * as api from '../services/api';

export default class CategoryList extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
    this.setCategories = this.setCategories.bind(this);
  }

  componentDidMount() {
    this.setCategories();
  }

  async setCategories() {
    const categories = await api.getCategories();
    this.setState({
      categories: categories,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <div className="category-list">
          <h1>Categorias</h1>
          {categories.map((category) => 
             <CategoryItem
               key={category.id} category={category.name} />)}
        </div>
      </div>
    );
  }
}
