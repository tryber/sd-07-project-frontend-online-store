import React from 'react';
import UpdateQuantity from './UpdateQuantity';

class ProductCartList extends React.Component {
  render() {
    const { listProductCart } = this.props;
    return (
      <div>
        {listProductCart.map((product) => (
          <div
            key={ product.id }
          >
            <h2 data-testid="shopping-cart-product-name">{ product.title }</h2>
            <img
              src={ product.thumbnail }
              alt="productsCart"
            />
            <p>{ product.price }</p>
            <UpdateQuantity id={ product.id } />
          </div>
        ))}
      </div>
    );
  }
}

export default ProductCartList;
