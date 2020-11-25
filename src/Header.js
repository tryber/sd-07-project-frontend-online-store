import React from 'react';
import SearchBar from './Components/SearchBar';
import ShoppingCartButton from './Components/ShoppingCartButton';


class Header extends React.Component {
  render() {
    return (
      <div>
        {/* logo */}
        <SearchBar />
        {/* filtro */}
        <ShoppingCartButton />
      </div>
    );
  }
}

export default Header;
