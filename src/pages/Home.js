import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import '../App.css';
import ListCategories from '../components/ListCategories';
import ShoppingCartButton from '../components/ShoppingCartButton';
import ProductCard from '../components/ProductCard';
import * as api from '../services/api';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchItems: '',
      categoryId: '',
      itemsFindOut: [],
      loading: false,
      cartQuantity: localStorage.getItem('items_cart'),
    };
  }

  fetchByCategory = async (event) => {
    const categoryId = event.target.id;
    const products = await api.getProductsFromCategoryAndQuery(categoryId);
    this.setState({
      itemsFindOut: products,
      categoryId,
      loading: true,
    });
  }

  handleTextInput = (event) => {
    this.setState({
      searchItems: event.target.value,
    });
  }

  handleSubmit = () => {
    const { searchItems } = this.state;
    api.getProductsFromCategoryAndQuery(searchItems)
      .then((products) => this.setState({ itemsFindOut: products, loading: true }))
      .catch((error) => console.log(error));
  }

  handleUndefined = () => {
    const { loading, itemsFindOut } = this.state;
    if (!itemsFindOut.lenght || loading === false) {
      return <Redirect to="./pages/ProductNotFound" />;
    }
  }

  addCartQuantity = () => {
    this.setState((prevState) => ({
      cartQuantity: Number(prevState.cartQuantity) + 1,
    }));
  }

  render() {
    const { categoryId, cartQuantity, loading, itemsFindOut } = this.state;
    return (
      <main>
        <header>
          <div>
            <h1>HOME</h1>
          </div>
          <div>
            <SearchBar
              parentState={ this.state }
              categoryId={ categoryId }
              handleSubmit={ this.handleSubmit }
              handleTextInput={ this.handleTextInput }
              handleUndefined={ this.handleUndefined }
            />
          </div>
          <div><ShoppingCartButton cartQuantity={ cartQuantity } /></div>
        </header>
        <ListCategories fetchByCategory={ this.fetchByCategory } />
        <div className="grid">
          <div className="item">
            {loading ? itemsFindOut.results.map((item) => {
              const { id } = item;
              return (<ProductCard
                addCartQuantity={ this.addCartQuantity }
                key={ id }
                item={ item }
              />);
            }) : ''}
          </div>
        </div>
      </main>
    );
  }
}
