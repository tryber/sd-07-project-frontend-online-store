import React from 'react';
import {
  ShoppingCartContainer,
  ShoppingCartContent,
  ShoppingCartEmpty,
  ShoppingCartIcon,
} from './styles';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../../services/api';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: JSON.parse(localStorage.getItem('shoppingCartProducts')) || [],
    };
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const { match } = this.props;
    const { id } = match.params;
    let { category, query } = match.params;

    if (category === '0') category = '';
    if (query === '0') query = '';
    console.log(category, query)

    const { results } = await getProductsFromCategoryAndQuery(category, query);
    const product = results.find((result) => result.id === id);
    if (product) {
      this.setState((state) => ({ products: [...state.products, product] }));
      const { products } = this.state;
      localStorage.setItem('shoppingCartProducts', JSON.stringify(products));
    }
  }

  render() {
    const { products } = this.state;
    const productQuantity = products.length;

    return (
      <ShoppingCartContainer>
        <ShoppingCartContent>
          <Link to="/shopping-cart" data-testid="shopping-cart-button">
            <ShoppingCartIcon />
          </Link>
          {!productQuantity && (
            <ShoppingCartEmpty data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </ShoppingCartEmpty>
          )}
          {productQuantity && (
            <span data-testid="shopping-cart-product-quantity">
              { productQuantity }
            </span>
          )}
          {products.map(({ id, title }) => (
            <div key={ id }>
              <h3 data-testid="shopping-cart-product-name">{ title }</h3>
            </div>
          ))}
        </ShoppingCartContent>
      </ShoppingCartContainer>
    );
  }
}

ShoppingCart.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      category: PropTypes.string,
      query: PropTypes.string,
    }),
  }),
};

ShoppingCart.defaultProps = {
  match: {
    params: {
      id: '0',
      category: '0',
      query: '0',
    },
  },
};

export default ShoppingCart;
