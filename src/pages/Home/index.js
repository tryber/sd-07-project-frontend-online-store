import React, { Component } from 'react';
import * as api from '../../services/api';
import * as cp from '../../components';
import * as view from '../../views';
import * as css from './style';

export class Home extends Component {
  constructor(props) {
    super();

    this.getCurrentCategory = this.getCurrentCategory.bind(this);

    this.state = {
      isLoading: false,
      categoryId: '',
      products: [],
      searchInput: '',
      searchResult: true,
    };
  }

  getCurrentCategory(id) {
    this.setState({ categoryId: id, isLoading: true }, async () => {
      const object = await api.getProductsFromCategoryAndQuery(id);
      this.setState({ products: object.results, isLoading: false });
      console.log(object);
    });
  }

  componentDidMount() {
    this.getCurrentCategory();
  }

  render() {
    const { isLoading, products, searchResult, CardProduct } = this.state;

    return (
      <css.CtnCenter>
        <cp.Header />
        <div className="ctn-main">
          <div className="ctn-sidebar">
            <view.SideBar />
          </div>

          <div className="ctn-displayCard">
            <view.SearchInput />
            <div className="displayCard">
              { products.map((product) => (
                <cp.CardProduct
                  key={ product.id }
                  thumbnail={ product.thumbnail }
                  price={ product.price }
                  title={ product.title }
                >
                  { product.title }
                </cp.CardProduct>
              ))}
            </div>
          </div>
        </div>
      </css.CtnCenter>
    );
  }
}

export default Home;
