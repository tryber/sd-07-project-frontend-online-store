import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../components/ProductCard';
import QueryBar from '../components/QueryBar';
import CategoryItem from '../components/CategoryItem';
import CartIcon from '../components/CartIcon';
import * as api from '../services/api';
import '../css/ProductList.css';

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      query: '',
      object: [],
      totalQuantity: 0,
    };
    this.CategoriesList = this.CategoriesList.bind(this);
    this.onInputSearchChange = this.onInputSearchChange.bind(this);
    this.SearchProduct = this.SearchProduct.bind(this);
    this.getProducts = this.getProducts.bind(this);
    // this.totalAmount = this.totalAmount.bind(this);
  }

  componentDidMount() {
    this.CategoriesList();
    // this.totalAmount();
  }


  onInputSearchChange({ target }) {
    this.setState({ query: target.value });
  }

  async getProducts(categoryId, query) {
    const products = await api.getProductsFromCategoryAndQuery(categoryId, query);

    return products;
  }

  async SearchProduct() {
    const { query } = this.state;
    const categoryId = 'ALL';
    const { results } = await this.getProducts(categoryId, query);
    this.setState({ object: results });
  }

  async SearchProductForCategory(object) {
    const { query } = this.state;
    const categoryId = object.id;
    const { results } = await api.getProductsFromCategoryAndQuery(categoryId, query);
    this.setState({ object: results });
  }

/*   totalAmount() {
    const valueInit = 0;
    const { cart } = this.props;
    let { totalQuantity } = this.state;
    totalQuantity = cart.reduce((acc, item) => acc + parseInt(item.quantity, 10),
      valueInit);
    this.setState({ totalQuantity });
    console.log('TotalAmoutn PRODUCTLIST: ', totalQuantity);
  } */

  CategoriesList() {
    api.getCategories()
      .then((categories) => {
        this.setState({ categories });
      })
      .catch((error) => console.log('Promises rejected: ', error));
  }

  render() {
    const { categories, object, query, totalQuantity } = this.state;
    const { addItem } = this.props;
    {console.log('ProductList: ', this.props)}

    return (
      <div className="main-list">
        <div className="side-bar">
          <p>Categorias</p>
          { categories.map((category) => (<CategoryItem
            key={ category.id }
            query={ query }
            category={ category }
            onClick={ () => this.SearchProductForCategory(category) }
          />))}
        </div>
        <div className="main">
          <QueryBar
            query={ query }
            onQueryChange={ this.onInputSearchChange }
            onClick={ this.SearchProduct }
          />
          <CartIcon totalQuantity={ totalQuantity } />
          <section className="prodoct-cards">
            {object.map((product) => (
              <ProductCard
                onClick={ this.totalAmount }
                key={ product.id }
                product={ product }
                addItem={ addItem }
              />
            ))}
          </section>
        </div>
      </div>
    );
  }
}

ProductList.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default ProductList;
