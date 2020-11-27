import React from 'react';
import { Link } from 'react-router-dom';
import chart from '../icon/chart.png';
import voltar from '../icon/voltar.png';
import PropTypes from 'prop-types';

class DetailsProduct extends React.Component {
  render() {
    const { state } = this.props.location;
    const { product } = state;
    const { title, thumbnail, price } = product;
    return (
      <div>
        <Link to="/shoppingCart" data-testid="shopping-cart-button">
          <img className="chartImg" src={ chart } alt="carrinho-de-compras" />
        </Link>
        <Link to="/">
          <img className="voltar" src={ voltar } alt="imagem-Voltar" />
        </Link>
        <div>
          <h2 data-testid="product-detail-name">
            { title }
          </h2>
          <div>
            <img src={ thumbnail } alt="Imagem detalhada" />
          </div>
          <div>
            <p>Descrição Técnica</p>
            <p>
              R$ { price }
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailsProduct;

DetailsProduct.PropTypes = {
  state: PropTypes.shape({}),
  product: PropTypes.shape({}),
  location: PropTypes.shape({}),
  title: Prop.string,
  thumbnail: Prop.string,
  price: PropTypes.number,
};
DetailsProduct.defaultProps = {
  state: PropTypes.shape({}),
  product: PropTypes.shape({}),
  location: PropTypes.shape({}),
  title: Prop.string,
  thumbnail: Prop.string,
  price: PropTypes.number,
};
