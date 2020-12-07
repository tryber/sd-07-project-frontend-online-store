import React from 'react';
import PropTypes from 'prop-types';

class ListItem extends React.Component {
  render() {
    const { item: { title, thumbnail, price, quantity } } = this.props;
    const intialChar = 0;
    const finalChar = 20;
    const showTitle = title.slice(intialChar, finalChar);
    return (
      <div>
        {`${thumbnail} - ${showTitle} - R$${price} QTD: ${quantity}`}
      </div>
    );
  }
}
ListItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.any.isRequired,
  }).isRequired,
};

export default ListItem;
