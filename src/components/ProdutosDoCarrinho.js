import React from 'react';
import PropTypes from 'prop-types';
import BotoesProduto from './BotoesProduto';

class ProdutosDoCarrinho extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    }
    this.toIncreaseQuantity = this.toIncreaseQuantity.bind(this);
    this.toDecreaseQuantity = this.toDecreaseQuantity.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  toIncreaseQuantity() { this.setState(() => console.log('oi'))}
  
  toDecreaseQuantity() {
    this.setState(() => ({ count: this.state.count - 1 }), () => {
      console.log(`Botão subtrair: ${this.state.count}`);
    });
  }

  handleDeleteClick() {
    console.log(this.state)
  }
   render() {
    const { product, handleTotalPrice } = this.props;
    const { title, price, thumbnail, quantity, id } = product;
    if (localStorage.getItem('productsToBuy') !== null) {
      // let jsonParseGetItem = JSON.parse(localStorage.getItem('productsToBuy'));
      // console.log(jsonParseGetItem[0].quantity);
    }
    return (
      <div data-testid="product">
        <h1 data-testid="shopping-cart-product-name">{ title }</h1>
        <img src={ thumbnail } alt="imagem de um produto" />
        <span>{ price }</span>
        <BotoesProduto
          id={ id }
          quantity={ quantity }
          price={ price }
          quantity={ this.state.count }
          handleTotalPrice={ handleTotalPrice } />
        <p>{quantity}</p>
      </div>
    );
  }
}

export default ProdutosDoCarrinho;

ProdutosDoCarrinho.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};
