import React from 'react';

class ProductList extends React.Component {
  constructor() {
    super();

    this.state = {
      listProduct: [],
    };
  }

  render() {
    const { listProduct } = this.state;
    const number = 0;
    return listProduct.length === number ? (
      <p data-testid="home-initial-message" className="container-product">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    ) : (
      listProduct.map((product) => (
        <div className="product" key="product.id">
          {product}
          <div className="container-product" data-testid="product">
            <div className="image-product">
              <img src={ product.thumbnail } alt="imagem do produto" />
            </div>
            <div className="header-product">
              {product.title}
            </div>
            <div className="price-product">
              {product.installments.amount}
            </div>
          </div>
        </div>
      ))
    );
  }
}

export default ProductList;
