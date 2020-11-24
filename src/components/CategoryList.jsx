import React from 'react';
import CategoryItem from './CategoryItem';
import * as api from '../services/api';

export default class CategoryList extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
    this.getCategories = this.getCategories.bind(this);
  }

  componentDidMount() {
    this.getCategories();
  }

  async getCategories() {
    const categories = await api.getCategories();
    this.setState({
      categories: categories,
    });
  }

  render() {
    return (
      <div>
        <div className="category-list">
          <h1>Categorias</h1>
          {this.state.categories
            .map((category) => 
              <CategoryItem
                key={category.id} category={category.name} />)}
        </div>
      </div>
    );
  }
}