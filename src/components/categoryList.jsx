import React, { Component } from 'react';
import * as api from '../services/api'
import CategoryItems from './categorysItems';

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
  };

  render() {
    const { categories } = this.state;
    const { handleSearchChange } = this.props;
    return (
      <div>
        {categories.map((category) => <CategoryItems key={category.name} category={category} handleSearchChange={handleSearchChange} />)}
        {/* {categories.map((category) => <label><input onChange={handleSearchChange} data-testid="category" type="checkbox" key={category.id} value={`${category.id}`} />{`${category.name}`}<br /></label> )} */}
      </div>
    );
  }
}

export default Category;
