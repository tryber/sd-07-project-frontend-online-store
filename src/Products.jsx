import React from 'react';
import { Link } from 'react-router-dom';

import './App.css';

class Products extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { product } = this.props;
    return(
      <div className="teste2" data-testid="product">
        <Link to={`/ShoppingCart/Details/${product.id}`}>
          <div className="teste" data-testid="product-detail-link">
            <p>{product.title}</p>
            <img src={product.thumbnail} />
            <p>R${product.price}</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default Products;
