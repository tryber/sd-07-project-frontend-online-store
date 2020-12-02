import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../../services/api';
import './CategoryList.css';


class CategoryList extends Component {
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
      <div className="category-content">
        <h3>Categorias</h3>
        { categories.map(
          ({ id, name }) => (
            <label key={ name } htmlFor={ name }>
              <input
                data-testid="category"
                type="radio"
                id={ name }
                name="categoryId"
                value={ id }
                onChange={ handleChange }
              />
              {name}
            </label>
          ),
        ) }
      </div>
    );
  }
}

CategoryList.propTypes = { handleChange: PropTypes.func.isRequired };

export default CategoryList;
