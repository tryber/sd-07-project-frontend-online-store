import React from 'react';
import SearchBar from '../components/SearchBar';

class Home extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
          <SearchBar />
        </header>
      </div>
    )
  }
}

export default Home;
