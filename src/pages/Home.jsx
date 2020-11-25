import React from 'react';
import ListCards from '../components/ListCards';
import SearchBar from '../components/SearchBar';

class Home extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ListCards />
      </div>
    )
  }
}

export default Home;
