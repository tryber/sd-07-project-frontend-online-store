import React from 'react';
import ItemCard from './ItemCard';
import PropTypes from 'prop-types';

class ListCard extends React.Component {
  render() {
    const { product } = this.props;
    const products = product === undefined ? [] : product;
    return (
      <div className="list-card-product">
        {products.map((prod) => {
          console.log();
          return (
            <ItemCard
              key={ prod.id }
              product={ prod }
              title={ prod.title }
              id={ prod.id }
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

ListCard.PropTypes = {
  product: PropTypes.shape({}),
}
ListCard.defaultProps = {
  product: PropTypes.shape({}),
}