import React, { Component } from 'react';
import * as api from '../services/api';

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      loading: true,
    };
  }

  componentDidMount() {
    api.getCategories()
      .then((categories) => this.setState({
        loading: false,
        categories,
      }));
  }

  render() {
    const { loading, categories } = this.state;
    if (loading) {
      return (<aside>Carregando...</aside>);
    }
    return (
      <aside>
        <ol>
          {categories.map(({ id, name }) => (
            <li data-testid="category" key={ id }>{name}</li>))}
        </ol>
      </aside>);
  }
}

export default Categories;
