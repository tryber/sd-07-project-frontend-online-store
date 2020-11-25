import React from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import CategoryList from './CategoryList';
import * as api from '../services/api';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queryValue: '',
      products: [],
      loading: false,
      idValue: undefined,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFetch = this.handleFetch.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
  }

  handleInputChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleRadioChange({ target }) {
    const { value } = target;
    this.setState({ idValue: value }, () => {
      const { queryValue, idValue } = this.state;
      api
        .getProductsFromCategoryAndQuery(idValue, queryValue)
        .then((response) => {
          this.setState({
            loading: false,
            products: response.results,
          });
        });
    });
  }

  handleFetch(event) {
    event.preventDefault();
    const { queryValue, idValue } = this.state;
    this.setState(
      {
        loading: true,
      },
      () => {
        api
          .getProductsFromCategoryAndQuery(idValue, queryValue)
          .then((response) => {
            this.setState({
              loading: false,
              products: response.results,
            });
          });
      },
    );
  }

  render() {
    const { queryValue, products, loading } = this.state;

    return (
      <div className="product-list">
        <CategoryList onChange={ this.handleRadioChange } />

        <div className="container">
          <form className="first-input">
            <label htmlFor="queryValue" data-testid="home-initial-message">
              <input
                name="queryValue"
                type="text"
                data-testid="query-input"
                value={ queryValue }
                onChange={ this.handleInputChange }
              />
              <Link data-testid="shopping-cart-button" to="/cart">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdCYOcz2do9rQylt8XnMawcSwL1a-qaEfXxQ&usqp=CAU"
                  alt=""
                  className="cart-image"
                />
              </Link>
              <br />
              Digite algum termo de pesquisa ou escolha uma categoria.
            </label>
            <br />

            <button
              type="button"
              data-testid="query-button"
              onClick={ this.handleFetch }
            >
              Buscar
            </button>
          </form>

          <div className="products">
            {loading ? (
              <div>loading...</div>
            ) : (
              products.map((product) => (
                <Product
                  key={ product.id }
                  title={ product.title }
                  thumbnail={ product.thumbnail }
                  price={ product.price }
                  id={ product.id }
                  filterId={ product.category_id }
                />
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
