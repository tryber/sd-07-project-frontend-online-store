import React, { Component } from 'react';
import * as API from '../services/api';

class CategoryList extends Component {
  constructor(props) {
    super(props)

    this.fetchAPI = this.fetchAPI.bind(this);

    this.state = {
      categories: [],
    }
  }
  
  componentDidMount() {
    this.fetchAPI()
  }

  async fetchAPI() {
    const result = await API.getCategories();
    this.setState({
      categories: result,
    })
  }

  render () {
    const { categories } = this.state;
    return (
      <div>
        <span>Categorias</span>
        <ul>{categories.map((category) => <li data-testid="category">{category.name}</li>)}</ul>
      </div>
    )
  }
}

export default CategoryList;