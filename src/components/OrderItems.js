import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OrderItems extends Component {
  render() {
    const { onSortToggle } = this.props;
    return (
      <select onChange={ onSortToggle }>
        <option value="true">Ordenar</option>
        <option value="false">Não Ordenar</option>
      </select>
    );
  }
}

OrderItems.propTypes = { onSortToggle: PropTypes.func.isRequired };

export default OrderItems;
