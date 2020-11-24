import * as api from '../services/api';
import React, { Component } from 'react';

class ListCategories extends Component {
  constructor() {
    super();

    this.state = {
    categories: [],
    }
  }

  componentDidMount() {
    api.getCategories()
    .then(categories => this.setState({ categories }))
    .catch(err => console.log(err));
  }



  render() {
    return (
    <section>
        <select>
        {this.state.categories.map(category =>
            <option
            data-testid="category"
            key={category.id}
            >
            {category.name}
            </option>)}
        </select>
    </section>
    );
  }
}

export default ListCategories;
