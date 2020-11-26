import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.Component {
  render() {
    const { name, id, onClick } = this.props;
    return (
      <div>
        <input
          type="radio"
          name="item-category"
          id={ id }
          data-testid="category"
          onClick={ onClick }
        />
        <label htmlFor={ id }>{name}</label>
      </div>
    );
  }
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Item;
