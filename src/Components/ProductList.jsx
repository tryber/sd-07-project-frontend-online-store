import React from 'react';
import PropTypes from 'prop-types';

class ProductList extends React.Component {
  render() {
    const { products } = this.props;
    const listProduct = products;
    const number = 0;
    return listProduct.length === number ? (
      <p data-testid="home-initial-message" className="container-mensage">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    ) : (
      listProduct.map((product) => (
        <div
          className="container-product"
          data-testid="product"
          key="product.id"
        >
          <div className="image-product">
            <img src={ product.thumbnail } alt="imagem do produto" />
          </div>
          <div className="header-product">{product.title}</div>
          <div className="price-product">{`R$${product.price}`}</div>
        </div>
      ))
    );
  }
}

ProductList.propTypes = { products: PropTypes.array.isRequired };

export default ProductList;
