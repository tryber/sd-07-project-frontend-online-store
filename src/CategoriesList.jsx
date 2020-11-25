import React from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';
import * as api from './services/api';

class CategoriesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };

    this.fetchCategories = this.fetchCategories.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const result = await api.getCategories();
    this.setState({
      categories: result,
    });
  }

  render() {
    const { categories } = this.state;
    const { handleChange } = this.props;
    return (
      <div>
        <span>Categorias</span>
        { categories.map(
          (category) => (
            <CategoryItem
              key={ category.name }
              category={ category }
              handleChange={ handleChange }
            />),
        ) }
      </div>
    );
  }
}

CategoriesList.propTypes = { handleChange: PropTypes.func.isRequired };

export default CategoriesList;
