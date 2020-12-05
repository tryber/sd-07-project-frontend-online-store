import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class Product extends React.Component {
  render() {
    const { product } = this.props;
    let freeShipping;
    if (product.shipping.free_shipping) {
      freeShipping = <span data-testid="free-shipping">Frete grátis!</span>;
    }
    if (!product.shipping.free_shipping) {
      freeShipping = <span />;
    }

    return (
      <div data-testid="product" className="product">
        <Link
          data-testid="product-detail-link"
          to={{
            pathname: '/product_Detail',
            search: `${product.title}`,
            state: { product },
          }}
        >
          <p>{product.title}</p>
          <img src={product.thumbnail} />
          <p>{`R$ ${product.price}`}</p>
          {freeShipping}
        </Link>
      </div>
    );
  }
}

export default Product;
