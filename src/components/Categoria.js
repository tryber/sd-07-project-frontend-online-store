import React from 'react';

class Categoria extends React.Component {
  
  render() {
    const { category, callback } = this.props;
    return (
      <div>
        <input data-testid="category" type="radio" name="category" value={category.name} onChange={() => callback(category.id)} />
        <label htmlFor={category.name}>{category.name}</label>
        <br />
      </div>
    );
  }
}

export default Categoria;
