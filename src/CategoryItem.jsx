import React from 'react';

class CategoryItem extends React.Component {
  render() {
    const { name, id } = this.props.category;
    return (
      <div>
        <input
          data-testid="category"
          type="radio"
          id={name}
          name="categories"
          value={id}
        />
        <label htmlFor={name}>{name}</label>
      </div>
    )
  }
}

export default CategoryItem;
