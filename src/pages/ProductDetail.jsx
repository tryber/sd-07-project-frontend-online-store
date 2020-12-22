import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as mlAPI from '../services/api';
import Evaluations from '../components/Evaluations';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemDetails: '',
      loading: true,
      counter: 0,
    };
    this.fetchApiById = this.fetchApiById.bind(this);
    this.getItensLocalStorage = this.getItensLocalStorage.bind(this);
  }

  componentDidMount() {
    this.getItensLocalStorage();
    this.fetchApiById();
  }

  getItensLocalStorage() {
    const quantity = JSON.parse(localStorage.getItem('cartItems'));
    if (!quantity) {
      const tamanho = 0;
      this.setState({ counter: tamanho });
    } else {
      const tamanho = quantity.length;
      this.setState({ counter: tamanho });
    }
  }

  productsCounter() {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  }

  addCartItem({ id, title, price, inStock }) {
    const evaluation = [];
    const cartItemProperties = { id, title, price, inStock, evaluation };
    this.productsCounter();
    if (!localStorage.cartItems) {
      localStorage.setItem('cartItems', JSON.stringify([cartItemProperties]));
    } else {
      const itemsInStorage = localStorage.getItem('cartItems');
      const parsedItems = JSON.parse(itemsInStorage);
      localStorage.setItem('cartItems', JSON.stringify(parsedItems
        .concat(cartItemProperties)));
    }
  }

  async fetchApiById() {
    this.setState(
      { loading: true },
      async () => {
        const { match } = this.props;
        const { params } = match;
        const { category, id } = params;
        const itemFetched = await mlAPI
          .getProductsFromCategoryAndQuery(category, '');
        const itemFiltered = await itemFetched.results
          .find((item) => item.id === id);
        this.setState({
          loading: false,
          itemDetails: itemFiltered,
        });
      },
    );
  }

  render() {
    const { loading, itemDetails, counter } = this.state;
    const { match } = this.props;
    const { params } = match;
    const { id: paramsId } = params;

    const {
      id,
      title,
      price,
      thumbnail,
      attributes,
      available_quantity: inStock,
    } = itemDetails;
    const loadingElement = <span>Carregando...</span>;
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        <p data-testid="shopping-cart-size">{counter}</p>
        <div data-testid="product-detail-name" className="cardProduct">
          {loading ? loadingElement : (
            <div>
              <h1>{ title }</h1>
              <img src={ thumbnail } alt="product" />
              <p>{ price }</p>
              <div>
                {
                  attributes.map((element) => (
                    <div key={ element.id }>
                      { element.name }
                      <span>{ element.value_name }</span>
                    </div>
                  ))
                }
              </div>
              <button
                type="button"
                name="productId"
                data-testid="product-detail-add-to-cart"
                onClick={ () => this
                  .addCartItem({ id, title, price, inStock }) }
              >
                Adicionar ao carrinho
              </button>
            </div>
          )}
        </div>
        <Evaluations itemId={ paramsId } />
      </div>
    );
  }
}

export default ProductDetail;

ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
