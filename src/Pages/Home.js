import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import CategorieCard from '../Components/CategorieCard';
import Search from '../Components/Search';
import * as api from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      categories: [],
      products: [],
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.SearchProductForCategory = this.SearchProductForCategory.bind(this);
    this.SearchProduct = this.SearchProduct.bind(this);
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    const allCategories = async () => {
      const list = await api.getCategories();
      this.setState({ categories: list });
    };
    allCategories();
  }

  onSearchTextChange({ target }) {
    const { name } = target;
    const value = target.value;
    this.setState({ [name]: value });
  }
  async getProducts(categoryId, query) {
    const products = await api.getProductsFromCategoryAndQuery(
      categoryId,
      query
    );
    return products;
  }

  async SearchProduct() {
    const { searchText } = this.state;
    const categoryId = 'ALL';
    const { results } = await this.getProducts(categoryId, searchText);
    this.setState({ products: results });
  }

  async SearchProductForCategory(object) {
    const { searchText } = this.state;
    const categoryId = object.id;
    const { results } = await this.getProducts(categoryId, searchText);
    this.setState({ products: results });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <div className="left">
          <section>
            <div>
              {categories.map((category) => (
                <CategorieCard
                  key={category.id}
                  category={category}
                  onclick={() => this.SearchProductForCategory(category)}
                />
              ))}
            </div>
          </section>
        </div>
        <div>
            <Link data-testid="shopping-cart-button" to="/cartBuy">
              <img
                className="cartBuy"
                src="https://img.icons8.com/ios/452/shopping-cart.png"
                alt="imagem de carrinho"
              />
          </Link>
        </div>
        <div className="top">
          <header>
            <Search />
          </header>
          <div className="header-link-cart">
          </div>
      </div>
      </div>
    );
  }
}

export default Home;
