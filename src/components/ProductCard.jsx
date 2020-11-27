import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
export default class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      objeto: [],

    };
    this.addToCart = this.addToCart.bind(this);
    this.quantidadeTha = this.quantidadeTha.bind(this);

  }

  addToCart() {
    const recuperar = JSON.parse(localStorage.getItem('items') || []);
    const { product } = this.props;
    recuperar.push(product)
    localStorage.setItem('items', JSON.stringify(recuperar));
  }

  quantidadeTha() {
    const { id } = this.props.product;
    const array = localStorage.getItem('item')
    const newId = id 
    const index = array.findIndex(elemento  => elemento.id === newId);
    (index === -1) ? array.push({ id: newId, quantidade: 1}) : array[index].quantidade ++
    console.log(this.props.quantidade)
  }

  render() {
    const { product } = this.props;
    const { title, price, thumbnail, id } = product;
    return (
      <div data-testid="product" className="product-card" key={id}>
        <Link
          to={{
            pathname: `/details/${id}`,
            state: product,
          }}
          data-testid="product-detail-link"
        >
          <h3>{title}</h3>
        </Link>
        <p>{`Preço: ${price}`}</p>
        <img src={thumbnail} alt={title} />

        <button
          type="button"
          data-testid="product-add-to-cart"
          // id={id}
          onClick={() => this.addToCart(product)}
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}
ProductCard.propTypes = {
  product: PropTypes.shape({
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};
