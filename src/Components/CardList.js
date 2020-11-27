import React from 'react';
import PropTypes from 'prop-types';
import CardProduct from './CardProduct';

class CardList extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        {products.map((product) => (
          <CardProduct key={ product.id } product={ product } />
        ))}
      </div>
    );
  }
}

CardList.propTypes = { products: PropTypes.arrayOf(PropTypes.objectOf).isRequired };

export default CardList;
