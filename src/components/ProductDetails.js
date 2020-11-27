import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductDetails extends Component {

  // constructor() {
  //   super();
  //   this.fetch = this.fetch.bind(this);

  //   this.state = {
  //     currentProduct: this.props.item,
  //   };
  // }

  // componentDidMount() {
  //   this.fetch();
  // }

  // async fetch() {
  //   const { id } = this.props.match.params;
  //   const fetchProduct = await api.getProductsFromCategoryAndQuery(id, '');
  //   this.setState({
  //     { currentProduct: fetchProduct.results }
  //   });
  // }
  render() {
    const { location: {state: {productName, productImg, productPrice }}} = this.props;
    return (
      <div>
        <Link to="/" data-testid="shopping-cart-button">
          Voltar
        </Link>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          Carrinho de compras
        </Link>
        <div>
          <h2 data-testid="product-detail-name">{productName}</h2>
          <h3>{`R$ ${productPrice}`}</h3>
          <img alt="product image" src={productImg} />
        </div>
      </div>
    );
  }
}

export default ProductDetails;
