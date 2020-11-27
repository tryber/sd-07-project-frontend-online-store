import React from 'react';
import PropTypes from 'prop-types';
import Products from './Products';

class ProductList extends React.Component {
  render() {
    const { products, click } = this.props;
    const emptyArray = 0;

    if (click) {
      return (
        <div>
          {products.map((product) => <Products key={ product.id } product={ product } />)}
          {products.length === emptyArray && <p>Nenhum produto foi encontrado</p>}
        </div>
      );
    }
    return (
      <div>
        {products.map((product) => <Products key={ product.id } product={ product } />)}
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  click: PropTypes.bool.isRequired,
};

export default ProductList;
