import React from 'react';
import { Link } from 'react-router-dom';
import { EmptyCart, CartItem } from '../../components';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    const cartProduct = JSON.parse(sessionStorage.getItem('item'));

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);

    this.state = { products: cartProduct };
  }

  componentDidUpdate() {
    const { products } = this.state;
    let total = null;
    sessionStorage.setItem('item', JSON.stringify(products));

    products.forEach(({ quantity }) => { total += quantity; });
    sessionStorage.setItem('totalQuantity', total);
  }

  increase(index) {
    const { products } = this.state;

    this.setState({ products: products.map((product, i) => {
      if (index === i) return { ...product, quantity: product.quantity + 1 };
      return product;
    }) });
  }

  decrease(index) {
    const { products } = this.state;

    this.setState({ products: products.map((product, i) => {
      if (index === i) return { ...product, quantity: product.quantity - 1 };
      return product;
    }) });
  }

  cartItemsRenderized() {
    const { products } = this.state;
    return products.map(({ title, quantity, availableQt }, index) => (
      <CartItem
        title={ title }
        quantity={ quantity }
        add={ () => this.increase(index) }
        minus={ () => this.decrease(index) }
        availableQt={ availableQt }
        key={ title }
      />
    ));
  }

  render() {
    const { products } = this.state;
    if (!products) return <EmptyCart />;

    return (
      <div id="cart-items">
        {this.cartItemsRenderized()}
        <Link to="/checkout" data-testid="checkout-products">Finalizar compra</Link>
      </div>
    );
  }
}

export default Cart;
