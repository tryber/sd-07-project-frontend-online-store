import React, { Component } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import ProductList from '../components/ProductList/ProductList';

class HomePage extends Component {
  // constructor(props) {
  //   super(props);
  //   this.setState = {
  //     category: 'xablau',
  //   };
  // }

  render() {
    // const { category } = this.state;
    return (
      <div>
        <ProductList category="info" />
      </div>
    );
  }
}

export default HomePage;
