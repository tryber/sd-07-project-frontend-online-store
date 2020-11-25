import React from 'react';
import logo from '../logo.svg';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="header-container">
        <img className="logo" src={logo} />
        <div className="search">
          <div className="search-bar-content">
            <img className="search-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJTOvaCRMvUxPy8OR3W53CXP_eLOKV3QBaw&usqp=CAU" alt="search icon" />
            <input className="search-bar" type="text" />
          </div>
          <div className="home-initial-message" data-testid="home-initial-message">
            <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
