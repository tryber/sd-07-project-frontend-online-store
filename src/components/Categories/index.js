import React from 'react';
import { Link } from 'react-router-dom';

import { getCategories } from '../../services/api';

import {
  CategoriesContainer,
  CategoriesContent,
  CategoryInput,
  CategoryLabel,
} from './styles';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categories: [], loading: true };
  }

  async componentDidMount() {
    await this.setup();
  }

  async setup() {
    const response = await getCategories();
    this.setStateCategories(response);
  }

  setStateCategories(categories) {
    this.setState({ categories, loading: false });
  }

  render() {
    const { categories, loading } = this.state;
    if (loading) {
      return <h3>Loading...</h3>;
    }

    return (
      <CategoriesContainer>
        <CategoriesContent>
          {categories.map(({ id, name }) => (
            <CategoryLabel key={ id } data-testid="category">
              <Link to={ `/search/${id}/0` }>
                <CategoryInput
                  type="radio"
                  name="category"
                />
                { name }
              </Link>
            </CategoryLabel>
          ))}
        </CategoriesContent>
      </CategoriesContainer>
    );
  }
}

export default Categories;
