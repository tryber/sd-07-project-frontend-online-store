import React, { Component } from 'react';
import * as api from '../services/api'

class Category extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: []
    }
    this.fetchCategory = this.fetchCategory.bind(this);
  }

  componentDidMount() {
    this.fetchCategory();
  }

  async fetchCategory() {
    const RequestReturn = await api.getCategories();
    this.setState({
      categories: RequestReturn,
    });
    console.log(RequestReturn);
  };

  render() {
    const { categories } = this.state;
    return (
      <div>
        <label>
          {categories.map((category) => <label><input data-testid="category" type="checkbox" key={category.id} value={`${category.id}`} />{`${category.name}`}<br /></label> )}
        </label>
      </div>
    );
  }
}

export default Category;
