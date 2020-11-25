import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import '../App.css'
import ListCategories from '../components/ListCategories';
import ShoppingCartButton from '../components/ShoppingCartButton';
    
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searching: ''
    }
  }


  
  render() {
    return (
      <main>
        <header>
          <div>
            <h3>Aqui vai uma logo</h3></div>
          <div>
            <SearchBar />
          </div>
          <div>Aqui Shoppingcart</div>
        </header>
          <h1>Home</h1>
          <ListCategories />
          <ShoppingCartButton />
      </main>
    );
  }
}
