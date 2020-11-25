import React from 'react';
import SearchBar from '../components/SearchBar';
import Caregories from '../components/Categories';
import ShoppingCartIcon from '../components/Shopping-cart-icon';
import List from '../components/List';

class Home extends React.Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
    this.select = this.select.bind(this);
    this.state = {
      category: "",
      searchValue: "",
    }
  }

  onClick(texto) {
    this.setState({ searchValue: texto })
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
            <SearchBar onClick={this.onClick} />
            <ShoppingCartIcon />
          </div>
          <List category={category} query={searchValue} />
        </div>
      </div>
    );
  }
}

export default Home;