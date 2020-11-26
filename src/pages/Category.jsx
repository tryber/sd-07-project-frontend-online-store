import React from 'react';
import PropTypes from 'prop-types';
import * as Api from '../services/api';

class Category extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: [],
    };
  }

  componentDidMount() {
    this.getCategories();
  }

  async getCategories() {
    const Categorys = await Api.getCategories();
    this.setState({ category: Categorys });
  }

  render() {
    const { category } = this.state;
    const { selected, handleSelected } = this.props;
    if (!category[0]) return <div />;

    return (
      <div>
        {category.map(({ name, id }) => (
          <div key={ id }>
            <label htmlFor={ id }>
              <input
                type="radio"
                name="category-option"
                id={ id }
                value={ name }
                checked={ selected === name }
                data-testid="category"
                onChange={ handleSelected }
              />
              { name }
            </label>
          </div>
        ))}
      </div>
    );
  }
}

export default Category;

Category.propTypes = {
  selected: PropTypes.string.isRequired,
  handleSelected: PropTypes.func.isRequired,
};
