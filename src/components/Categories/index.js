import React from 'react';
import PropTypes from 'prop-types';
import { CategoriesContainer, Wrapper } from './styles';
import Category from '../Category';
import { getCategories } from '../../services/api';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categories: [] };

    this.fetchAPI = this.fetchAPI.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const response = await getCategories();
    this.setState({ categories: response });
  }

  render() {
    const { selectCategory } = this.props;
    const { categories } = this.state;

    const notCategoriesLength = 0;

    if (categories.length === notCategoriesLength) {
      return <div>Carregando</div>;
    }

    return (
      <CategoriesContainer>
        <Wrapper />
        <h3>Filtros</h3>
        {categories.map(({ id, name }) => (
          <Category
            key={ id }
            name={ name }
            id={ id }
            selectCategory={ selectCategory }
          />
        ))}
      </CategoriesContainer>
    );
  }
}

Categories.propTypes = {
  selectCategory: PropTypes.func.isRequired,
};

export default Categories;
