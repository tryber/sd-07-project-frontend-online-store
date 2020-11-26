import React from 'react';
import FiltersCategory from './FiltersCategory';
import Header from './Header';
import ProductList from './ProductList';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ProductList />
        <FiltersCategory />
      </div>
    );
  }
}

export default Home;
