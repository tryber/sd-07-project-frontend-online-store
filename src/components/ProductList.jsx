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
    const { inputValue } = this.state;
      this.setState(
        {
          loading: true,
        },
        () => {
          api.getProductsFromCategoryAndQuery(undefined, inputValue).then((response) => {
            this.setState({
              loading: false,
              products: response.results,
            });
          });
        },
      );
  }

  render() {
    const { inputValue, products } = this.state;
    return (
      <div className="product-list">
        <CategoryList />

        <form className="first-input">
          <label data-testid="home-initial-message">
            <input name="inputValue" type="text" data-testid="query-input" value={inputValue} onChange={this.handleInputChange}/>
            <Link data-testid="shopping-cart-button" to="/cart">
              Botão
            </Link>
            <br />
            Digite algum termo de pesquisa ou escolha uma categoria.
          </label>
          <button data-testid="query-button" onClick={this.handleFetch}>Buscar</button>
        </form>
        <div>
          {products.map((product) =>(
            <Product
              key={product.id} 
              title={product.title}
              thumbnail={product.thumbnail}
              price={product.price}
            />
          ))} 
        </div>
      </div>
    );
  }
}

export default ProductList;
