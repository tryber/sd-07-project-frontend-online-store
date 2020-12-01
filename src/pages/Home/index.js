import React, { Component } from 'react';
import * as api from '../../services/api';
import * as cp from '../../components';
import * as view from '../../views';
import * as css from './style';
import * as util from '../../services/utilities';

export class Home extends Component {
  constructor(props) {
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
    this.setState({ categoryId: id, isLoading: true }, async () => {
      const object = await api.getProductsFromCategoryAndQuery(
        this.state.categoryId,
        this.state.searchInput
      );
      this.setState({ products: object.results, isLoading: false });
    });
  }

  fetchSearchButton(searchResult) {
    this.setState({ searchInput: searchResult, isLoading: true }, async () => {
      const object = await api.getProductsFromCategoryAndQuery(
        this.state.categoryId,
        this.state.searchInput
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
            <view.SideBar callback={this.getCurrentCategory} />
          </div>

          <div className="ctn-displayCard">
            <view.SearchInput
              itensProducts={productsItemsCart}
              amountCart={productsItemsCart.length}
              callback={this.fetchSearchButton}
            />
            <div className="displayCard">
              {products.length === 0 && !isLoading && (
                <div data-testid="home-initial-message">
                  Digite algum termo de pesquisa ou escolha uma categoria.
                </div>
              )}
              {isLoading ? (
                <cp.Loading />
              ) : (
                products.map((product) => (
                  <cp.CardProduct
                    key={product.id}
                    product={product}
                    amount={1}
                    addToCart={(product) =>
                      util.setObjStorageAndSetState(
                        'productsItemsCart',
                        product,
                        this.setState
                      )
                    }
                  >
                    {product.title}
                  </cp.CardProduct>
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
