import React from 'react';
import PropTypes from 'prop-types';
import ItemCard from './ItemCard';

class ListCard extends React.Component {
  render() {
    const { product } = this.props;
    const products = product === undefined ? [] : product;
    return (
      <div className="list-card-product">
        {products.map((prod) => {
          const { shipping } = prod;
          let freeShipping = false;
          if (shipping.free_shipping === true) {
            freeShipping = true;
          }
          return (
            <ItemCard
              key={ prod.id }
              product={ prod }
              title={ prod.title }
              id={ prod.id }
              freeShipping={ freeShipping }
              image={ prod.thumbnail }
              price={ prod.price }
            />
          );
        })}
      </div>
    );
  }
}

export default ListCard;

ListCard.propTypes = {
  product: PropTypes.arrayOf(PropTypes.shape({})),
};

ListCard.defaultProps = {
  product: PropTypes.arrayOf(PropTypes.shape({})),
};
