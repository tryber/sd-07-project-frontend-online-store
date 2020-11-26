import React from 'react';

class CategoryItems extends React.Component {
  render() {
    const { category: { name, id }, handleSearchChange } = this.props;
    return(
      <div>
        <input
          data-testid="category"
          type="checkbox"
          id={name}
          value={id}
          onChange={handleSearchChange}
          name="categoryId"
        />
        <label htmlFor={name}>{name}</label>
      </div>
      
    );
  }
}

export default CategoryItems;