import React from 'react';
import PropTypes from 'prop-types';
import {
  CategoriesContainer,
  CategoriesContent,
  CategoriesTitle,
  InputRadio,
  Label,
} from './styles';
import { getCategories } from '../../services/api';

class Categories extends React.Component {
  constructor(props) {
    super(props);

    this.state = { categories: [] };
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const response = await getCategories();
    this.setState({ categories: response });
  }

  render() {
    const { categories } = this.state;
    const { handleIdCategory } = this.props;
    return (
      <CategoriesContainer>
        <CategoriesTitle>Filtrar por</CategoriesTitle>
        <CategoriesContent>
          { categories.map(({ id, name }) => (
            <Label key={ id } data-testid="category">
              <InputRadio
                value={ id }
                type="radio"
                name="category"
                onClick={ handleIdCategory }
              />
              { name }
            </Label>
          )) }
        </CategoriesContent>
      </CategoriesContainer>
    );
  }
}

Categories.propTypes = {
  handleIdCategory: PropTypes.func.isRequired,
};

export default Categories;
