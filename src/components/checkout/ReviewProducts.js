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

  renderProducts(products) {
    return products.map((product) => {
      const { thumbnail, title, price } = product
      return (
        <div key={title}>
          <img src={thumbnail} alt="" />
          <p>{title}</p>
          <p>{price}</p>
        </div>
      );
    })
  }

  render() {
    const { products, totalPrice } = this.props
    return (
      <div>
        <h2>Revise Seus produtos</h2>
        { this.renderProducts(products) }
        <p>Total: R${totalPrice}</p>
      </div>
    );
  }
}

export default ReviewProducts;
