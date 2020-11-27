import React from 'react';
import ItemCard from './ItemCard';

class ListCard extends React.Component {
  render() {
    const { product } = this.props;
    let teste = product === undefined ? [] : product;
    console.log(product);
    return (
      <div className="list-card-product">
        {teste.map((prod) => {
          return (
            <ItemCard
              key={prod.id}
              product={prod}
              title={prod.title}
              id={prod.id}
              image={prod.thumbnail}
              price={prod.price}
            />
          );
        })}
      </div>
    );
  }
}

export default ListCard;
