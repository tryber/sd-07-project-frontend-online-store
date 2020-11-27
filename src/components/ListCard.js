import React from 'react';
import ItemCard from './ItemCard';

class ListCard extends React.Component {
  render() {
    const { product } = this.props;
    const products = product === undefined ? [] : product;
    return (
      <div className="list-card-product">
        {products.map((prod) => {
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
