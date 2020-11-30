import React from 'react';
import PropTypes from 'prop-types';
import EditForm from '../components/EditForm';

export default class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      objeto: [],
    };
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    const {
      location: { state: product },
    } = this.props;
    // aqui as props estão sendo passadas pelo location 
    // location são props advindas do react dom ?
    const { id, title, price, thumbnail } = product;
    const array = JSON.parse(localStorage.getItem('items') || '[]');
    const index = array.findIndex((elemento) => elemento.id === id);
    index === -1
      ? array.push({ id, title, price, thumbnail, quantidade: 1 })
      : array[index].quantidade++;
    localStorage.setItem('items', JSON.stringify(array));
  }

  render() {
    const {
      location: { state: product },
      // o proprio product entra como props e é passado como props
    } = this.props;
    return (
      <div>
        <div>
          <h1 data-testid="product-detail-name">{product.title}</h1>
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div>
          <p>{`Preço: $ ${product.price}`}</p>
        </div>
        <EditForm />
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          // id={id}
          onClick={() => this.addToCart(product)}
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}
ProductDetail.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
