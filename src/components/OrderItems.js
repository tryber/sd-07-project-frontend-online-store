import React, { Component } from 'react';

class OrderItems extends Component {
  render() {
    return (
      <select onChange={this.props.onSortToggle}>
        <option value={true}>Ordenar</option>
        <option value={false}>Não Ordenar</option>
      </select>
    );
  };
}

export default OrderItems;
