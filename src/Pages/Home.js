import React from 'react';
import CategoryList from '../components/CategoryList';
import InitialMessage from '../components/InitialMessage';
import * as api from '../services/api';
import Item from '../components/Item';
import ButtonShop from '../components/ButtonShop';

class Home extends React.Component {
  constructor() {
    super();
    this.updateSearchValue = this.updateSearchValue.bind(this);
    this.searchProduct = this.searchProduct.bind(this);
    this.onLoadProducts = this.onLoadProducts.bind(this);
    this.state = {
      search:'',
      products: [],
      categoryID: '',
      showInitialMessage: true,
    };
  }

  async searchProduct() {
    const { categoryID, search } = this.state;
    const products = await api.getProductsFromCategoryAndQuery(categoryID, search);
    this.setState({
      products: products.results,
      showInitialMessage: false,
    });
  }

  updateSearchValue(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  async onLoadProducts(products = []) {
    console.log('hey', products, this);
    this.setState({
      products,
      showInitialMessage: false
    });
  }
    
  render() {
    return ( 
      <div>
        <header>
          <input
            data-testid="query-input"
            id="search_bar"
            type="text"
            name="search"
            className="search_bar"
            value={this.state.search}
            onChange={this.updateSearchValue}
          />
          <button
            data-testid="query-button"
            onClick={this.searchProduct}
          >
            Search
          </button>
          <ButtonShop />
        </header>
        <div className="conteudo">
          <CategoryList onLoadProducts={this.onLoadProducts} />
          {this.state.showInitialMessage && <InitialMessage />}
          {!this.state.showInitialMessage &&
            <div className="item-list">
              {this.state.products
                  .map((product) =>
                    <Item key={product.id} {...product} />)}
            </div>}
        </div>
      </div>
    );
  }
}

export default Home;

/*Lógica de atualização do status usada foi retirado do 
projeto sd-07-project-movie-card-library-crud, arquivo MovieForm */
