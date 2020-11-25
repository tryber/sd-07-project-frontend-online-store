import React from 'react';

class Products extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const { product } = this.props;
    return(
      <div>
        <p>
          {product.title}
        </p>
      </div>
    );
  }
}

export default Products;
