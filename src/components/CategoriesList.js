import React, { Component } from 'react';
import * as api from '../services/api';
import Loading from './Loading';


class CategoriesList extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      loading: true,

    };
  }

  componentDidMount() {
    this.listCategories();
  }

  listCategories() {
    this.setState(async () => {
      const requestedCategories = await api.getCategories();
      this.setState({ categories: requestedCategories, loading: false });
    });
  }

  render() {
    const { loading, categories } = this.state;

    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div>
            {categories.map((category) => (
              <p data-testid="category" key={ category.id }>
                {category.name}
              </p>


            ))}
          </div>
        )}
      </div>


    );
  }
}

export default CategoriesList;
