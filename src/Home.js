import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from './services/api';
import ProductCard from './components/ProductCard';
import cart from './images/cart.png';
import './App.css';
import Categories from './components/Categories';

class ProductsList extends Component {
  constructor() {
    super();
    this.state = {
      status: false,
      products: [],
      demand: '',
      productId: '',
    };

    this.fecthProducts = this.fecthProducts.bind(this);
    this.change = this.change.bind(this);
    this.fecthProductsCategoryId = this.fecthProductsCategoryId.bind(this);
  }

  async fecthProducts() {
    const { productId, demand } = this.state;
    const resultRequest = await getProductsFromCategoryAndQuery(productId, demand);
    this.setState({
      status: true,
      products: resultRequest.results,
    });
  }

  async fecthProductsCategoryId(id) {
    const resultRequest = await getProductsFromCategoryAndQuery(id, '');
    this.setState({
      status: true,
      products: resultRequest.results,
    });
  }

  change({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { status, products } = this.state;
    return (
      <div>
        {(status) ? <ProductCard products={ products } /> : false}
        {(products === []) ? <span>Nenhum produto foi encontrado</span> : false}
        <div className="ContainerForm">
          <form>
            <div>
              <div>
                <input
                  data-testid="query-input"
                  name="demand"
                  className="inputHome"
                  type="text"
                  onChange={ this.change }
                />
                <button
                  data-testid="query-button"
                  type="button"
                  onClick={ this.fecthProducts }
                >
                  PESQUISAR
                </button>
                <span data-testid="home-initial-message">
                  Digite algum termo de pesquisa ou escolha uma categoria.
                </span>
              </div>
            </div>
            <div>
              <Link to="./pages/cart">
                <img
                  className="btImg"
                  data-testid="shopping-cart-button"
                  src={ cart }
                  alt="Carrinho de Compras"
                />
              </Link>
            </div>
            <Categories fecthProductsCategoryId={ this.fecthProductsCategoryId }>
              <div>
                <Link to="./pages/cart">
                  <img
                    className="btImg"
                    data-testid="shopping-cart-button"
                    src={ cart }
                    alt="Carrinho de Compras"
                  />
                </Link>
              </div>
            </Categories>
          </form>
        </div>
      </div>
    );
  }
}


export default ProductsList;
