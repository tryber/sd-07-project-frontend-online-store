import React, { Component } from 'react';
import * as api from '../services/api';
import './CategoryList.css';

export default class CategoryList extends Component {
  constructor() {
    super();
    this.listOfCategory = this.listOfCategory.bind(this);
    this.state = {
      category: [],
    };
  }

  componentDidMount() {
    this.listOfCategory();
  }

  async listOfCategory() {
    const Fetch = await api.getCategories();
    this.setState({
      category: Fetch,
    });
  }

  async filterCategory(event) {
    const { handleChange, handleClick } = this.props;
    await handleChange(event);
    handleClick(event);
  }

  render() {
    return (
      <div className="container-lists-category">
        {this.state.category.map(( categoria ) => (
          <label htmlFor={categoria.id} key={categoria.id}>
            {categoria.name}
            <input
              value={categoria.id}
              name="category"
              type="radio"
              data-testid="category"
              onClick={(event) => {
                this.filterCategory(event);
              }}
            />
          </label>
        ))}
      </div>
    );
  }
}
