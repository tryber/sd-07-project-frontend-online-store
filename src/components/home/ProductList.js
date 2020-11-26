import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

class ProductList extends React.Component {
  render() {
    const { query, api, num, onClick } = this.props;
    const products = api;
    if (api.results.length === 0) {
      return (
        <div>
          <p>Nenhum produto foi encontrado</p>
        </div>
      );
    }
    return (
      <div className="productList">
        {products.results.map((prod) =>
          <ProductCard
            num={num}
            query={query}
            key={prod.id}
            product={prod}
            onClick={onClick}
          />,
        )}
      </div>
    );
  }
}

export default ProductList;
