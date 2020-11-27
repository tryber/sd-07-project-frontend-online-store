import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import chart from '../icon/chart.png';
import voltar from '../icon/voltar.png';

class DetailsProduct extends React.Component {
  render() {
    const { location } = this.props;
    const { state } = location;
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
              R$
              { price }
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailsProduct;

DetailsProduct.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        price: PropTypes.number,
      }),
    }),
  }),
};
DetailsProduct.defaultProps = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        price: PropTypes.number,
      }),
    }),
  }),
};
