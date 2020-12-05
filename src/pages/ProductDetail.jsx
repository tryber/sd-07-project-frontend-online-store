import React from 'react';
import PropTypes from 'prop-types';
import EditForm from '../components/EditForm';
import ShoppingCartButton from '../components/ShoppingCartButton';

export default class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
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
    const negativeIndex = -1;
    if (index === negativeIndex) {
      array.push({ id, title, price, thumbnail, quantidade: 1 });
    } else {
      array[index].quantidade += 1;
    }
    localStorage.setItem('items', JSON.stringify(array));
  }

  render() {
    const {
      location: { state: product },
      // o proprio product entra como props e é passado como props
    } = this.props;
    return (
      <div className="product-details-main">
        <header className="header-bar-content">
          <h1>Product Details</h1>
        </header>
        <div className="product-details-content">
          <div className="product-card">
            <h1 data-testid="product-detail-name">{product.title}</h1>
            <img src={ product.thumbnail } alt={ product.title } />
            <div>
              <p>{`Preço: $ ${product.price}`}</p>
            </div>
          </div>
          <EditForm />
          <div className="add-to-cart-button-detail">
            <button
              className="product-button"
              type="button"
              data-testid="product-detail-add-to-cart"
              // id={product.id}
              onClick={ () => this.addToCart(product) }
            >
              Adicionar ao carrinho
            </button>
            <ShoppingCartButton />
          </div>
        </div>
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
