import React from 'react';
import SearchBar from '../components/SearchBar';
import Caregories from '../components/Categories';
import ShoppingCartIcon from '../components/Shopping-cart-icon';
import List from '../components/List';

class Home extends React.Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.select = this.select.bind(this);
    this.state = {
      category: "",
      searchValue: "",
    }
  }

  onChange(event) {
    this.setState({ searchValue: event.target.value })
  }

  select(event) {
    this.setState({ category: event.target.value })
  }

  render() {
    const { searchValue, category } = this.state;
    return(
      <div>
        <Caregories onChange={this.select} />
        <div>
          <div>
            <SearchBar onChange={this.onChange} value={searchValue} />
            <ShoppingCartIcon />
          </div>
          {(category === "" && searchValue === "") ?
          <h3 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
            </h3> : <List category={category} query={searchValue} />}
        </div>
      </div>
    );
  }
}

export default Home;