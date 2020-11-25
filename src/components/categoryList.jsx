import React, { Component } from 'react';
import * as api from '../services/api'

class Category extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: []
    }
    this.fetchCategory = this.fetchCategory.bind(this);
  }

  componentDidMount() {
    this.fetchCategory;
  }

  async fetchCategory() {
    this.setState(
      async () => {
        const RequestReturn = await api.getCategories;
        this.setState({
          categories: RequestReturn,
        });
      });
  }

  render() {
    const { categories } = this.state;
    const { id, name } = this.state.categories
    return (
      <div data-testid="category">
        <select>
        {/* {categories.map((category) => <option key={id} value={`${id}`} >  {`${name}`} </option>)} */}
        </select>
      </div>
    );
  }
}