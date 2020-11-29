import React from 'react';
import {
  HomeContainer,
  HomeContent,
  MainContent,
} from './styles';

import Header from '../../components/Header';
import Categories from '../../components/Categories';
import Products from '../../components/Products';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { idCategory: '', query: '' };
    this.handleIdCategory = this.handleIdCategory.bind(this);
    this.handleWorldSearch = this.handleWorldSearch.bind(this);
  }

  handleIdCategory({ target }) {
    const { value } = target;
    this.setState({ idCategory: value });
  }

  handleWorldSearch(event) {
    event.preventDefault();
    const { value } = event.target;
    this.setState({ query: value });
  }

  render() {
    const { idCategory, query } = this.state;

    return (
      <HomeContainer>
        <Categories handleIdCategory={ this.handleIdCategory } />

        <HomeContent>
          <Header handleWorldSearch={ this.handleWorldSearch } />

          <MainContent>
            <Products
              category={ idCategory }
              query={ query }
            />
          </MainContent>
        </HomeContent>
      </HomeContainer>
    );
  }
}

export default Home;
