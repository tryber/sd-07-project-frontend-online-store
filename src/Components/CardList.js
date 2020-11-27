import React from 'react';
import PropTypes from 'prop-types';
import CardProduct from './CardProduct';

class CardList extends React.Component {
  render() {
    const { products,termo } = this.props;
    return (
      <div className="card-list">
        {products.map((product) => (
          <CardProduct key={product.id} termo={termo} product={product} />
        ))}
      </div>
    );
  }
}

CardList.propTypes = { products: PropTypes.arrayOf(PropTypes.objectOf).isRequired };

export default CardList;
