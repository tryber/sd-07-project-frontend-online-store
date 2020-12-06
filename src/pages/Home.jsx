import React from 'react';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import ProductsTable from '../components/ProductsTable'
import '../App.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.changeStateValue = this.changeStateValue.bind(this);this.state = {
      arrayOfItemByInputedText: [],
      searchElement: '',
      categoryId: '',
      counter: 0,
    };
  }

  changeStateValue(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <Categories  handleChange={ this.changeStateValue } />
        <ProductsTable />
      </div>
    );
  }
}

export default Home;
