import React from 'react';
import FiltersCategory from './FiltersCategory';
import Header from './Header';
import ProductList from './ProductList';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-body">
          <FiltersCategory />
          <ProductList />
        </div>
      </div>
    );
  }
}

export default Home;
