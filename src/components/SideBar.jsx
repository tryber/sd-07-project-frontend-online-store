import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SideBar extends Component {
  render() {
    const { categories, onChangeCategorySelected } = this.props;

    return (
      <div>
        {categories.map(({ id, name }) => (
          <div className="categories-itens" key={ id }>
            <label htmlFor={ id } data-testid="category">
              <input
                name="option"
                id={ id }
                type="radio"
                value={ name }
                onChange={ onChangeCategorySelected }
              />
              {name}
            </label>
          </div>
        ))}
      </div>
    );
  }
}

SideBar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChangeCategorySelected: PropTypes.func.isRequired,
};

export default SideBar;
