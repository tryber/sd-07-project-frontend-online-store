import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Button, Icon } from 'rbx';

class DetailsProduct extends React.Component {
  constructor() {
    super();
    this.handleCart = this.handleCart.bind(this);
    this.cartUpdate = this.cartUpdate.bind(this);
    this.state = {
      cartCount: JSON.parse(localStorage.getItem('cart')),
    };
  }

  cartUpdate() {
    this.setState({
      cartCount: JSON.parse(localStorage.getItem('cart')),
    });
  }

  handleCart() {
    const { location } = this.props;
    const { state } = location;
    const { product } = state;
    const { title, price } = product;
    let addLocalStorage = JSON.parse(localStorage.getItem('cart'));
    if (addLocalStorage !== null) {
      addLocalStorage.push(`${title} $${price}`);
    } else {
      addLocalStorage = [];
      addLocalStorage.push(`${title} $${price}`);
    }
    localStorage.setItem('cart', JSON.stringify(addLocalStorage));
    this.cartUpdate();
  }

  render() {
    const { location } = this.props;
    const { state } = location;
    const { product } = state;
    const { title, thumbnail, price } = product;
    const count = 0;
    const { cartCount } = this.state;

    return (
      <div>
        <div>
          <Link to="/shoppingCart" data-testid="shopping-cart-button">
            <Icon size="large">
              <FontAwesomeIcon icon={ faCartPlus } size="3x" />
            </Icon>
          </Link>
          <span data-testid="shopping-cart-size" className="cart-details">
            {cartCount === null ? count : cartCount.length}
          </span>
        </div>

        <div>
          <h2 data-testid="product-detail-name">{title}</h2>
        </div>

        <div>
          <img src={ thumbnail } alt="Imagem detalhada" />
        </div>

        <div>
          <p>Descrição Técnica</p>
          <p>
            R$
            {price}
          </p>
        </div>

        <div>
          <Button
            rounded
            outlined
            color="primary"
            data-testid="product-detail-add-to-cart"
            onClick={ this.handleCart }
          >
            Adicionar ao carrinho!
          </Button>
        </div>

        <div>
          <Link to="/">
            <Icon size="large">
              <FontAwesomeIcon icon={ faBackward } size="3x" />
            </Icon>
          </Link>
        </div>
        <form>
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="nota" />
          <textarea
            data-testid="product-detail-evaluation"
            placeholder="Mensagem(opcional)"
          />
          <input type="submit" value="Avaliar" />
        </form>
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
