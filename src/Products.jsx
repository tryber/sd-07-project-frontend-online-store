import React from 'react';

class Products extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { product } = this.props;
    return(
      <div data-testid="product">
        <p>{product.title}</p>
        <img src={product.thumbnail} />
        <p>R${product.price}</p>
      </div>
    );
  }
}

export default Products;
