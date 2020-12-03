import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RemoveItem extends Component {
  render() {
    const { id, removeItem } = this.props;
    return (
      <button type="button" onClick={ () => removeItem(id) }>
        Remover Item
      </button>
    );
  }
}

RemoveItem.propTypes = {
  id: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default RemoveItem;
