import React from 'react';
import PropTypes from 'prop-types';

class ItemCategory extends React.Component {
  render() {
    const { category, onChange, checked } = this.props;
    return (
      <div>
        <input
          type="radio"
          data-testid="category"
          id={ category.id }
          checked={ checked }
          onChange={ (event) => onChange(event) }
        />
        <label htmlFor={ category.id }>{ category.name }</label>
      </div>
    );
  }
}

ItemCategory.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ItemCategory;
