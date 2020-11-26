import React from 'react';

class Item extends React.Component {
  render() {
    const { name, id, onClick } = this.props;
    return (
      <div>
        <input type="radio" name="item-category" id={ id } data-testid="category" onClick={ onClick } />
        <label htmlFor={ id }>{name}</label>
      </div>
    );
  }
}

export default Item;
