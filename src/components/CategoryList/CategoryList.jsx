import React, { Component } from 'react';
import * as api from '../../services/api';

class CategoryList extends Component {
  constructor() {
    super();
    this.state = {
      categoriesList: [],
    };
    this.fecthList = this.fecthList.bind(this);
  }

  componentDidMount() {
    this.fecthList();
  }

  fecthList() {
    api
      .getCategories()
      .then((categories) => this.setState({ categoriesList: categories }));
  }

  render() {
    const { categoriesList } = this.state;
    const { onChangeCategory } = this.props;
    return (
      <div className="categories-container">
        <span>Categorias:</span>
        <div>
          {categoriesList.map((category) => (
            <label key={ category.id } htmlFor={ category.id }>
              <input
                onClick={ onChangeCategory }
                name="category"
                type="radio"
                id={ category.id }
                key={ category.id }
                data-testid="category"
              />
              {category.name}
            </label>
          ))}
        </div>
      </div>
    );
  }
}

CategoryList.propTypes = {
  onChangeCategory: PropTypes.func.isRequired
};

export default CategoryList;
