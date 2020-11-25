import React from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import CategoryList from './CategoryList';
import * as api from '../services/api';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      products: [],
      loading: false,
      checkInput: undefined,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFetch = this.handleFetch.bind(this);
  }

  handleInputChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleFetch(event) {
    event.preventDefault();
    const { inputValue, checkInput } = this.state;
    this.setState(
      {
        loading: true,
      },
      () => {
        api
          .getProductsFromCategoryAndQuery(checkInput, inputValue)
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
    const { inputValue, products, loading } = this.state;

    return (
      <div className="product-list">
        <CategoryList
          onChange={ this.handleInputChange }
        />

        <div className="container">
          <form className="first-input">
            <label htmlFor="inputValue" data-testid="home-initial-message">
              <input
                name="inputValue"
                type="text"
                data-testid="query-input"
                value={ inputValue }
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
