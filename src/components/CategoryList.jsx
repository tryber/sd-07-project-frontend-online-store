import React from 'react';
import * as api from '../services/api';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);

    this.fetchCategories = this.fetchCategories.bind(this);

    this.state = {
      categories: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories() {
    this.setState(
      {
        loading: true,
      },
      () => {
        api.getCategories().then((response) => {
          this.setState({
            loading: false,
            categories: response,
          });
        });
      },
    );
  }

  render() {
    const { categories, loading } = this.state;

    if (loading) return <div>Carregando...</div>;

    return (
      <div className="category-list">
        Categorias:
        {categories.map((element) => (
          <label htmlFor="input-check" data-testid="category" key={element.id}>
            <input id="input-check" type="checkbox" />
            {element.name}
          </label>
        ))}
      </div>
    );
  }
}

export default CategoryList;
