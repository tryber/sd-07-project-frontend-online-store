import React from 'react';

class Item extends React.Component {
  render() {
    const { name, id } = this.props;
    return (
      <div data-testid="category">
        <input type="radio" name="item-category" id={id} />
        <label htmlFor={id}>{name}</label>
      </div>
    );
  }
}

export default Item;
