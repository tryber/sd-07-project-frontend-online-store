import React from 'react';

class Categoria extends React.Component {
  render() {
    const {category,callback} = this.props
    return (
      <div data-testid="category">
        <input type="radio" name="category" value={category.name} onClick={() => callback(category.id)} />
        <label htmlFor={category.name}>{category.name}</label>
        <br />
      </div>
    );
  }
}

export default Categoria;
