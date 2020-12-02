import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as mlAPI from '../services/api';
import Rating from './Rating';
import RatingAndComment from './RatingAndComment';
import ProductsCartCounter from './ProductsCartCounter';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemDetails: '',
      loading: true,
      rating: 0,
    };
    this.fetchApiById = this.fetchApiById.bind(this);
  }

  componentDidMount() {
    this.fetchApiById();
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

  addCartItem({ id, title, price }) {
    const cartItemProperties = { id, title, price };
    if (!localStorage.cartItems) {
      localStorage.setItem('cartItems', JSON.stringify([cartItemProperties]));
    } else {
      const itemsInStorage = localStorage.getItem('cartItems');
      const parsedItems = JSON.parse(itemsInStorage);
      localStorage.setItem('cartItems', JSON.stringify(parsedItems
        .concat(cartItemProperties)));
    }
  }

  render() {
    const { loading, itemDetails, rating } = this.state;
    const { id, title, price, thumbnail, attributes } = itemDetails;
    const { location } = this.props;
    const { counter } = location;
    const loadingElement = <span>Carregando...</span>;
    return (
      <div>
        <ProductsCartCounter counter={ counter } />
        <Link to="/">Home</Link>
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
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
                onClick={ () => this.addCartItem({ id, title, price }) }
              >
                Adicionar ao carrinho
              </button>
            </div>
          )}
        </div>
        <Rating rating={ rating } />
        <RatingAndComment />
      </div>
    );
  }
}

ProductDetail.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    itemDetails: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.shape({
    counter: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductDetail;
