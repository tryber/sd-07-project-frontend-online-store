import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
    const { parametros } = this.props.match.params;

    const categoria = parametros.split('-')[0];
    const termo = parametros.split('-')[1];
    const id = parametros.split('-')[2];

    const { results } = await api.getProductsFromCategoryAndQuery(
      categoria,
      termo,
    );
    const produto = results.filter((productOne) => productOne.id === id);
    const marca = produto[0].attributes[0].value_name;
    const condicoes = produto[0].attributes[1].value_name;
    const modelo = produto[0].attributes[2].value_name;
    this.setState({ product: produto[0], marca, modelo, condicoes });
  }

  render() {
    const {
      product,
      marca = 'Nao informado',
      modelo = 'Nao informado',
      condicoes = 'Nao informado',
    } = this.state;
    const { title, thumbnail, price } = product;
    return (
      <div>
        <Link to="/">
          <img
            alt="Voltar"
            src="https://img.icons8.com/ios/2x/reply-arrow.png"
          />
        </Link>
        <div className="product-card-details">
          <h1 data-testid="product-detail-name">{ title }</h1>
          <div className="product-card-image-dev">
            <img
              className="product-card-image-details"
              alt="Imagem do Produto"
              src={ thumbnail }
            />
          </div>
          <p>
            R$
            { price }
          </p>
          <p>
            Marca:
            { marca }
          </p>
          <p>
            Modelo:
            { modelo }
          </p>
          <p>
            Condições do Produto:
            { condicoes }
          </p>
          <button
            data-testid="product-detail-add-to-cart"
            className="button-product"
            type="button"
          >
            ADICIONAR NO CARRINHO
          </button>
        </div>
      </div>
    );
  }
}


ProductDetails.propTypes = {
  products: PropTypes.objectOf.isRequired,
  condicoes: PropTypes.string.isRequired,
  modelo: PropTypes.string.isRequired,
  marca: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  thumbnail: PropTypes.img.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  match: PropTypes.arrayOf.isRequired,
};

export default ProductDetails;
