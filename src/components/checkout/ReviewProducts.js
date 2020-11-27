import React from 'react';

class ReviewProducts extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      totalPrice: 0,
    };
    this.renderProducts = this.renderProducts.bind(this);
  }

  componentDidMount() {
    // { products, totalPrice } = this.props;
  }

  renderProducts() {
  /* { products } = this.state;
    products.map((product) => {
      <div>
        <img src={product.img} alt="" />
        <p>{product.title}</p>
        <p>{product.price}</p>
      </div>
    }); */
  }

  render() {
    return (
      <div>
        <h2>Revise Seus produtos</h2>
        { /* renderProducts() */ }
        <p>Total: R${/* totalPrice */}</p>
      </div>
    );
  }
}

export default ReviewProducts;
