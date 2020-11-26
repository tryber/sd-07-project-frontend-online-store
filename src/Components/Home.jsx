import React from 'react';
import Header from './Header';
import ProductList from './ProductList';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ProductList />
      </div>
    );
  }
}

export default Home;
