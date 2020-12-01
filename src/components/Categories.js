import React from 'react';
import * as mlAPI from '../services/api';
import PropTypes from 'prop-types';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayOfCategories: [],
    };
    this.fetchCategories = this.fetchCategories.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    this.setState(
      async () => {
        const categoriesFromApi = await mlAPI.getCategories();
        this.setState({
          arrayOfCategories: categoriesFromApi,
        });
      },
    );
  }

  render() {
    const { arrayOfCategories } = this.state;
    const { handleChange } = this.props;
    return (
      <div>
        { arrayOfCategories.map(
          ({ id, name }) => (
            <label for={ name } name="category">
              <input
                key={ id }
                data-testid="category"
                type="radio"
                id={ name }
                name="categoryId"
                value={ id }
                onChange={ handleChange }
              />
              { name }
              <br />
            </label>
          ),
        )}
      </div>
    );
  }
}

Categories.propTypes = {
  handleChange: PropTypes.func,
}.isRequired;

export default Categories;
