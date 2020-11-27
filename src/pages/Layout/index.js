import React from 'react';

import Main from '../../components/Main';
import Categories from '../../components/Categories';
import './index.css';

class Index extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedCategory: '',
      products: [],
      categoryColor: '',
      toggleColor: true,
    };
    this.selectCategory = this.selectCategory.bind(this);
  }

  selectCategory({ target }) {
    const { id } = target;
    console.log(id);
    this.setState({ selectedCategory: id });
  }

  render() {
    const { selectedCategory, products } = this.state;
    return (
      <div className="container">
        <div className="wrapper">
          <Categories
            selectCategory={ this.selectCategory }
            selectedCategory={ selectedCategory }
          />
          <Main products={ products } />
        </div>
      </div>
    );
  }
}

export default Index;
