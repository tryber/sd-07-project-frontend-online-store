import React, { Component } from 'react';
import * as api from '../../services/api';
import * as cp from '../../components';
import * as viewProds from '../../views/products';
import * as view from '../../views';
import * as css from './style';
import * as util from '../../services/utilities';

class Home extends Component {
  constructor() {
    super();

    this.getCurrentCategory = this.getCurrentCategory.bind(this);
    this.fetchSearchButton = this.fetchSearchButton.bind(this);
    this.setState = this.setState.bind(this);

    this.state = {
      isLoading: false,
      categoryId: '',
      products: [],
      searchInput: '',
      productsItemsCart: [],
    };
  }

  componentDidMount() {
    util.getFromLocalAndSet('productsItemsCart', this.setState);
  }

  getCurrentCategory(id) {
    const { categoryId, searchInput } = this.state;
    this.setState({ categoryId: id, isLoading: true }, async () => {
      const object = await api.getProductsFromCategoryAndQuery(
        categoryId,
        searchInput,
      );
      this.setState({ products: object.results, isLoading: false });
    });
  }

  fetchSearchButton(searchResult) {
    const { categoryId, searchInput } = this.state;
    this.setState({ searchInput: searchResult, isLoading: true }, async () => {
      const object = await api.getProductsFromCategoryAndQuery(
        categoryId,
        searchInput,
      );
      this.setState({ products: object.results, isLoading: false });
    });
  }

  render() {
    const { isLoading, products, productsItemsCart } = this.state;

    return (
      <css.CtnCenter>
        <cp.Header />
        <div className="ctn-main">
          <div className="ctn-sidebar">
            <view.SideBar callback={ this.getCurrentCategory } />
          </div>

          <div className="ctn-displayCard">
            <view.SearchInput
              itensProducts={ productsItemsCart }
              amountCart={ productsItemsCart.length }
              callback={ this.fetchSearchButton }
            />
            <div className="displayCard">
              {products.length === [].length && !isLoading && (
                <div data-testid="home-initial-message">
                  Digite algum termo de pesquisa ou escolha uma categoria.
                </div>
              )}
              {isLoading ? (
                <cp.Loading />
              ) : (
                products.map((product) => (
                  <viewProds.CardProduct
                    key={ product.id }
                    product={ product }
                    amount={ 1 }
                    addToCart={ (obj) => util.setObjStorageAndSetState(
                      'productsItemsCart',
                      obj,
                      this.setState,
                    ) }
                  >
                    {product.title}
                  </viewProds.CardProduct>
                ))
              )}
            </div>
          </div>
        </div>
      </css.CtnCenter>
    );
  }
}

export default Home;
