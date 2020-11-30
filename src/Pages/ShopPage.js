import React from 'react';
import EmptyShopCar from '../components/EmptyShopCar';
import { readItemsOnCart } from '../services/cartAPI';

class ShopPage extends React.Component {
  render() {
    const items = readItemsOnCart();
    return (
      <>
        <EmptyShopCar />
        <div data-testid="shopping-cart-product-quantity">{items.length}</div>
        {items.map(({ title, id }) => <div data-testid="shopping-cart-product-name" key={ id }>{ title }</div>)}
      </>
    );
  }
}

export default ShopPage;
