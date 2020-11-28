import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import * as api from '../services/api';
class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
      modelo: 'nao informado',
      marca: 'nao informado',
      condicoes: 'nao informado',
    };
    this.getDetailsProduct = this.getDetailsProduct.bind(this);
  }

  componentDidMount() {
    this.getDetailsProduct();
  }

  async getDetailsProduct() {
    const parametros = this.props.match.params.parametros;

    const categoria = parametros.split("-")[0];
    const termo = parametros.split("-")[1];
    const id = parametros.split("-")[2];

    const { results } = await api.getProductsFromCategoryAndQuery(
      categoria,
      termo
    );
    const produto = results.filter(
      (productOne) => productOne.id === id
    );
    const marca = produto[0].attributes[0].value_name;
    const condicoes = produto[0].attributes[1].value_name;
    const modelo = produto[0].attributes[2].value_name;
    this.setState({ product: produto[0], marca, modelo, condicoes });
 }

  render() {
    const { product, marca = "Nao informado", modelo = "Nao informado", condicoes = "Nao informado" } = this.state;
    const { title, thumbnail, price } = product;
    return (
      <div className="product-card-details">
        <h1 data-testid="product-detail-name">{title}</h1>
        <div className="product-card-image-dev">
          <img
            className="product-card-image-details"
            alt="Imagem do Produto"
            src={thumbnail}
          />
        </div>
        <p>R$ {price}</p>
        <p>Marca: {marca}</p>
        <p>Modelo: {modelo} </p>
        <p>Condições do Produto: {condicoes}</p>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.arrayOf.isRequired,
};

export default ProductDetails;
