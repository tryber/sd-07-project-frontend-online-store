import React from 'react';
import PropTypes, { string } from 'prop-types';

class Produto extends React.Component {
  render() {
    const { product } = this.props;
    const { title, price, thumbnail } = product;
    return (
      <div data-testid="product">
        <h1>{ title }</h1>
        <img src={ thumbnail } alt="imagem de um produto" />
        <span>{ price }</span>
      </div>
    );
  }
}

export default Produto;

Produto.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};
