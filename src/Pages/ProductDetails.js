import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css'
import * as api from '../services/api';

class ProductDetails extends Component {
  constructor() {
    super();

    this.state = {
      product: {},
      modelo: '',
      marca: '',
      condicoes: '',
    };
    this.getDetailsProduct = this.getDetailsProduct.bind(this);
  }

  componentDidMount() {
    this.getDetailsProduct();
  }

  getDetailsProduct() {
    this.setState( async () => {
      const idProduct = this.props.match.params.id;
      const category_id = this.props.match.params.category_id;
      const termo = this.props.match.params.termo;
      const pegaproduct = await api.getProductsFromCategoryAndQuery(category_id,termo);
      const produto = pegaproduct.results.filter((productOne) => productOne.id === idProduct);
      const marca = produto[0].attributes[0].value_name;
      const condicoes = produto[0].attributes[1].value_name;
      const modelo = produto[0].attributes[2].value_name
      this.setState({ product: produto[0], marca, modelo, condicoes });
    });
  }

  render() {
    const { product, marca, modelo, condicoes } = this.state;
    const { title, thumbnail, price } = product;

    return (
          <div className="product-card-details" className="product-card-details">
            <p data-testid="shopping-cart-product-name" >{title}</p>
            <div className="product-card-image-dev">
              <img className="product-card-image-details" alt="Imagem do Produto" src={`${thumbnail}`} />
            </div>
            <p data-testid="shopping-cart-product-price">R${price}</p>
            <p data-testid="shopping-cart-product-brand" >Marca: {marca}</p>
            <p data-testid="shopping-cart-product-model">Modelo: {modelo}</p>
            <p data-testid="shopping-cart-product-condition">Condições do Produto: {condicoes}</p>
          </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.arrayOf.isRequired,
};

export default ProductDetails;
