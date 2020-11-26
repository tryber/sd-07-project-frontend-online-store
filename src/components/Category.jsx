import React from 'react';
import * as api from '../services/api'

class Category extends React.Component {

  constructor() {
    super();
    this.state = {
      categories: []
    }
  }

  componentDidMount() { this.fetchCategories(); }
  
  async fetchCategories() {
    const categoriesArr = await api.getCategories().then(e => e);
    this.setState({ categories: categoriesArr });
  }

  render() {
    return (
      <aside>
        <ul>
          {this.state.categories.map(({ id , name }) =>
            <li key={id} data-testid="category" id={id} >{name}</li>
          )}
        </ul>
      </aside>
    );
  }
}

export default Category;