import React from 'react';

class Categoria extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <div data-testid="category">
        <input type="radio" name="category" value={category.name} />
        <label htmlFor={category.name}>{category.name}</label>
        <br />
      </div>
    );
  }
}

export default Categoria;
