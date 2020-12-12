import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {
  SearchBar,
  ListCategories,
  ShoppingCartButton,
  ProductCard
} from '../../components';
import * as api from '../../services/api';
import './style.css';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchItems: '',
      categoryId: '',
      itemsFindOut: [],
      loadItems: false,
      cartQuantity: localStorage.getItem('items_cart'),
    };
  }

  fetchByCategory = async ({ target }) => {
    try {
      const categoryId = target.id;
      const products = await api.getProductsFromCategoryAndQuery(categoryId);
      this.setState({
        itemsFindOut: products,
        categoryId,
        loadItems: true,
      });
    } catch {
      this.setState({
        intemsFindOut: ['Item nao encontrado'],
      })
    }
  }

  handleTextInput = (event) => {
    this.setState({
      searchItems: event.target.value,
    });
  }

  handleSubmit = () => {
    const { searchItems } = this.state;
    api.getProductsFromCategoryAndQuery(searchItems)
      .then((products) => this.setState({ itemsFindOut: products, loadItems: true }))
      .catch((error) => console.log(error));
  }

  handleUndefined = () => {
    const { loadItems, itemsFindOut } = this.state;
    if (!itemsFindOut.lenght || loadItems === false) {
      return <Redirect to="./pages/ProductNotFound" />;
    }
  }

  addCartQuantity = () => {
    this.setState((prevState) => ({
      cartQuantity: Number(prevState.cartQuantity) + 1,
    }));
  }

  render() {
    const { categoryId, cartQuantity, loadItems, itemsFindOut } = this.state;
    return (
      <main>
        <header>
          <div>
            <h1>HOME</h1>
          </div>
          <div>
            <SearchBar
              parentState={this.state}
              categoryId={categoryId}
              handleSubmit={this.handleSubmit}
              handleTextInput={this.handleTextInput}
              handleUndefined={this.handleUndefined}
            />
          </div>
          <div><ShoppingCartButton cartQuantity={cartQuantity} /></div>
        </header>
        <div className="lits-container">
          <ListCategories fetchByCategory={this.fetchByCategory} />
          <div className="items-container">
            {loadItems ? itemsFindOut.results.map((item) => {
              const { id } = item;
              return (<ProductCard
                addCartQuantity={this.addCartQuantity}
                key={id}
                item={item}
              />);
            }) : ''}
          </div>
        </div>
      </main>
    );
  }
}
